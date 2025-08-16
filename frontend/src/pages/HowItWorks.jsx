import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Package, 
  Truck, 
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  Globe,
  FileText,
  Phone,
  MessageCircle
} from 'lucide-react';
import { mockData } from '../mock';

const HowItWorks = () => {
  const processIcons = {
    'Search': Search,
    'Package': Package,
    'Truck': Truck,
    'MapPin': MapPin
  };

  const timeline = [
    { day: 'Day 1', activity: 'Quote request submitted' },
    { day: 'Day 2-3', activity: 'Product sourcing & price confirmation' },
    { day: 'Day 4-7', activity: 'Quality check & preparation' },
    { day: 'Day 8-21', activity: 'Shipping to Sierra Leone' },
    { day: 'Day 22-25', activity: 'Customs clearance' },
    { day: 'Day 26-28', activity: 'Local delivery' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before shipping'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined operations for quick turnaround times'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive supplier network across China and beyond'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'All necessary paperwork and certificates handled professionally'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct line to our customer service team',
      contact: '+232 79 041 364'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Instant messaging for quick queries',
      contact: 'Chat with us'
    },
    {
      icon: FileText,
      title: 'Email Support',
      description: 'Detailed inquiries and documentation',
      contact: 'info@lobexglobal.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">How It Works</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Simple Process, 
              <span className="text-blue-600 block">Exceptional Results</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From your initial inquiry to final delivery, we've streamlined every step 
              to make importing products to Sierra Leone as simple and efficient as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each step is designed to ensure quality, efficiency, and your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.process.map((step, index) => {
              const IconComponent = processIcons[step.icon];
              return (
                <div key={step.step} className="relative text-center">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="h-10 w-10 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < mockData.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4">
                      <ArrowRight className="h-6 w-6 text-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Delivery Timeline</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              From Order to Delivery
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Typical timeline for product delivery, from initial quote to your doorstep in Sierra Leone.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-px bg-slate-200"></div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-slate-700 font-medium">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Timeline may vary based on product complexity, 
                    customs procedures, and shipping conditions. We keep you updated 
                    throughout the entire process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Why Our Process Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Built for Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every aspect of our process is designed to deliver quality results efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Process Benefits</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Why Businesses Choose Our Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Transparent Pricing</h3>
                    <p className="text-slate-600">No hidden fees or surprise costs. Everything is clearly outlined upfront.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Real-time Updates</h3>
                    <p className="text-slate-600">Stay informed at every step with regular progress updates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Quality Guarantee</h3>
                    <p className="text-slate-600">Every product is inspected before shipping to ensure it meets standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Expert Support</h3>
                    <p className="text-slate-600">Our team handles all complexities, so you can focus on your business.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Ready to Get Started?</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Product Category</option>
                  <option>Construction Materials</option>
                  <option>Electronics & Gadgets</option>
                  <option>Clothing & Accessories</option>
                  <option>Machinery & Vehicle Parts</option>
                  <option>Salon & Beauty Supplies</option>
                </select>
                <textarea
                  placeholder="Describe what you need..."
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  Start My Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Support & Communication</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              We're Here to Help
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple ways to reach us throughout your import journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="border-slate-100 text-center">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <channel.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{channel.title}</h3>
                    <p className="text-slate-600">{channel.description}</p>
                    <div className="text-blue-600 font-medium">{channel.contact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-blue-100">
              Join hundreds of satisfied customers who trust LOBEX Global for their import needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100 px-8">
                <Link to="/contact">
                  Request Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;