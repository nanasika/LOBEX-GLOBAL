import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+23279041364', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/lobexglobal', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/lobexglobal', '_blank');
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_3c0c9cbe-41be-44f8-ae13-d1276884b6fa/artifacts/u53shaxa_WhatsApp%20Image%202025-08-07%20at%2012.23.45%20AM.jpeg" 
              alt="LOBEX Global Logistics" 
              className="h-16 brightness-0 invert"
            />
            <p className="text-slate-300 text-sm leading-relaxed">
              Bridging Sierra Leone to Global Markets through reliable import and distribution services.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button 
                onClick={handleInstagramClick}
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button 
                onClick={handleFacebookClick}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/market-solutions" className="text-slate-300 hover:text-white transition-colors text-sm">
                Market Solutions
              </Link>
              <Link to="/how-it-works" className="text-slate-300 hover:text-white transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-slate-300 text-sm">Construction Materials</span>
              <span className="text-slate-300 text-sm">Electronics & Gadgets</span>
              <span className="text-slate-300 text-sm">Clothing & Accessories</span>
              <span className="text-slate-300 text-sm">Machinery & Vehicle Parts</span>
              <span className="text-slate-300 text-sm">Salon & Beauty Supplies</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">+232 79 041 364</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">info@lobexglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 LOBEX Global Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;