import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Truck, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      imageUrl: "https://images.unsplash.com/photo-1517011453931-c30f571a4fab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHhjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHN8ZW58MHx8fGJsdWV8MTc1NTM1NTMyNnww&ixlib=rb-4.1.0&q=85",
      title: 'Construction Materials',
      description: 'Quality building materials sourced directly from China',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8Ymx1ZXwxNzU1MzU1MzMxfDA&ixlib=rb-4.1.0&q=85",
      title: 'Electronics & Gadgets',
      description: 'Latest technology and electronic devices',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjbG90aGluZ3xlbnwwfHx8Ymx1ZXwxNzU1MzU1MzM1fDA&ixlib=rb-4.1.0&q=85",
      title: 'Clothing & Accessories',
      description: 'Fashion and apparel for every style and season',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1606206886378-e49a19ad0933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxtYWNoaW5lcnl8ZW58MHx8fGJsdWV8MTc1NTM1NTM2OXww&ixlib=rb-4.1.0&q=85",
      title: 'Machinery & Vehicle Parts',
      description: 'Industrial equipment and automotive components',
      color: 'bg-green-50 text-green-600'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1646376241249-f261e72c2029?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzYWxvbiUyMHN1cHBsaWVzfGVufDB8fHxibHVlfDE3NTUzNTUzNzZ8MA&ixlib=rb-4.1.0&q=85",
      title: 'Salon & Beauty Supplies',
      description: 'Professional beauty and salon equipment',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1535056889777-5821f7c5b4ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlY29yYXRpb258ZW58MHx8fGJsdWV8MTc1NTM1NTM4MHww&ixlib=rb-4.1.0&q=85",
      title: 'Interior Decoration',
      description: 'Furniture, home decor, lighting and design items',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Direct partnerships with manufacturers in China for competitive pricing'
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Consolidated shipping and efficient customs clearance'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks before shipping to ensure satisfaction'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Streamlined processes for quick turnaround times'
    }
  ];

  const testimonials = [
    {
      name: 'John Kamara',
      role: 'Construction Contractor',
      content: 'LOBEX has been our trusted partner for construction materials. Their China connections save us 40% on costs.',
      rating: 5
    },
    {
      name: 'Fatima Sesay',
      role: 'Electronics Retailer',
      content: 'Excellent service and quality products. The team understands our market needs perfectly.',
      rating: 5
    },
    {
      name: 'Mohamed Bangura',
      role: 'Auto Parts Dealer',
      content: 'Professional service from quote to delivery. LOBEX makes importing simple and reliable.',
      rating: 5
    }
  ];

  const stats = [
    { value: '500+', label: 'Happy Customers' },
    { value: '50+', label: 'Product Categories' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1678182451047-196f22a4143e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MHx8fHwxNzU1MzQ1MjM4fDA&ixlib=rb-4.1.0&q=85')`
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30">
                🚢 Trusted Import & Distribution Partner
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Bridging Sierra Leone to 
                  <span className="text-blue-300 block">Global Markets</span>
                </h1>
                
                <p className="text-lg text-blue-50 leading-relaxed max-w-lg">
                  Professional import and distribution services connecting Sierra Leone businesses 
                  with quality products from global suppliers, specializing in direct China trade.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg"
                >
                  <Link to="/contact">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
                >
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-blue-100">Direct China Partnership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-blue-100">Quality Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Quick Quote Request</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                  />
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90">
                    <option>Select Service Category</option>
                    <option>Construction Materials</option>
                    <option>Electronics & Gadgets</option>
                    <option>Clothing & Accessories</option>
                    <option>Machinery & Vehicle Parts</option>
                    <option>Salon & Beauty Supplies</option>
                    <option>Interior Decoration</option>
                  </select>
                  <textarea
                    placeholder="Describe your requirements..."
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                  ></textarea>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 shadow-lg">
                    Get Instant Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete Import Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From sourcing to delivery, we handle every aspect of your import needs 
              across multiple product categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-100">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg overflow-hidden mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                  >
                    <Link to="/contact">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-slate-50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full bg-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3N8ZW58MHx8fHwxNzU1MzQ1MjMzfDA&ixlib=rb-4.1.0&q=85')`,
              backgroundSize: '200px 200px'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose LOBEX</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Your Success Is Our Mission
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine global sourcing expertise with local market knowledge to deliver 
              exceptional value to Sierra Leone businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Sierra Leone Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with cargo ship image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/90"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1585713181935-d5f622cc2415?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxjYXJnb3xlbnwwfHx8fDE3NTUzNDUyNDN8MA&ixlib=rb-4.1.0&q=85')`
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Connect with Global Markets?
            </h2>
            <p className="text-xl text-blue-100">
              Join hundreds of Sierra Leone businesses already benefiting from our 
              professional import and distribution services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Start Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;