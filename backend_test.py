#!/usr/bin/env python3
"""
LOBEX Global Logistics Backend API Testing
Tests all backend endpoints for functionality and proper responses
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BASE_URL}/api"
print(f"🔗 Testing backend at: {API_BASE}")

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("\n📍 Testing GET /api/ (root endpoint)")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and data["message"] == "Hello World":
                print("   ✅ Root endpoint working correctly")
                return True
            else:
                print("   ❌ Unexpected response format")
                return False
        else:
            print(f"   ❌ Root endpoint failed with status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Connection error: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"   ❌ JSON decode error: {e}")
        return False

def test_create_status_check():
    """Test POST /api/status endpoint"""
    print("\n📍 Testing POST /api/status (create status check)")
    
    # Test data with realistic client name
    test_data = {
        "client_name": "LOBEX Interior Design Co."
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("   ✅ Status check created successfully")
                    return True, data["id"]
                else:
                    print("   ❌ Client name mismatch in response")
                    return False, None
            else:
                print(f"   ❌ Missing required fields in response. Got: {list(data.keys())}")
                return False, None
        else:
            print(f"   ❌ Create status check failed with status {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Connection error: {e}")
        return False, None
    except json.JSONDecodeError as e:
        print(f"   ❌ JSON decode error: {e}")
        return False, None

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    print("\n📍 Testing GET /api/status (retrieve status checks)")
    
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Retrieved {len(data)} status checks")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check structure of first item
                    first_item = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    
                    if all(field in first_item for field in required_fields):
                        print("   ✅ Status checks retrieved successfully with correct structure")
                        return True
                    else:
                        print(f"   ❌ Status check items missing required fields. Got: {list(first_item.keys())}")
                        return False
                else:
                    print("   ✅ Status checks endpoint working (empty list)")
                    return True
            else:
                print("   ❌ Response is not a list")
                return False
        else:
            print(f"   ❌ Get status checks failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Connection error: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"   ❌ JSON decode error: {e}")
        return False

def test_cors_configuration():
    """Test CORS configuration"""
    print("\n📍 Testing CORS configuration")
    
    try:
        # Test preflight request
        response = requests.options(
            f"{API_BASE}/status",
            headers={
                "Origin": "https://example.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            timeout=10
        )
        
        print(f"   Preflight Status Code: {response.status_code}")
        
        cors_headers = {
            "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
            "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
            "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
        }
        
        print(f"   CORS Headers: {cors_headers}")
        
        if response.status_code in [200, 204]:
            if cors_headers["Access-Control-Allow-Origin"]:
                print("   ✅ CORS is properly configured")
                return True
            else:
                print("   ❌ CORS headers missing")
                return False
        else:
            print(f"   ❌ CORS preflight failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Connection error during CORS test: {e}")
        return False

def test_mongodb_connectivity():
    """Test MongoDB connectivity by creating and retrieving data"""
    print("\n📍 Testing MongoDB connectivity")
    
    # Create a test status check
    test_client = f"MongoDB Test Client {uuid.uuid4().hex[:8]}"
    create_success, created_id = test_create_status_check_for_db_test(test_client)
    
    if not create_success:
        print("   ❌ MongoDB connectivity test failed - could not create record")
        return False
    
    # Try to retrieve and verify the created record
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        if response.status_code == 200:
            data = response.json()
            
            # Look for our test record
            found_record = None
            for record in data:
                if record.get("client_name") == test_client:
                    found_record = record
                    break
            
            if found_record:
                print("   ✅ MongoDB connectivity working - record created and retrieved successfully")
                return True
            else:
                print("   ❌ MongoDB connectivity issue - record not found after creation")
                return False
        else:
            print("   ❌ MongoDB connectivity test failed - could not retrieve records")
            return False
            
    except Exception as e:
        print(f"   ❌ MongoDB connectivity test error: {e}")
        return False

def test_create_status_check_for_db_test(client_name):
    """Helper function for MongoDB connectivity test"""
    test_data = {"client_name": client_name}
    
    try:
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            return True, data.get("id")
        else:
            return False, None
            
    except Exception:
        return False, None

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting LOBEX Global Logistics Backend API Tests")
    print("=" * 60)
    
    test_results = {
        "root_endpoint": test_root_endpoint(),
        "create_status": test_create_status_check()[0],
        "get_status": test_get_status_checks(),
        "cors_config": test_cors_configuration(),
        "mongodb_connectivity": test_mongodb_connectivity()
    }
    
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed! Backend is working correctly.")
        return True
    else:
        print("⚠️  Some backend tests failed. Check the details above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)