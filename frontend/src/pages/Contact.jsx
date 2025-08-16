import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Globe,
  Send,
  CheckCircle,
  Instagram,
  Facebook
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        urgency: 'normal'
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+232 79 041 364', '+232 99 676 174'],
      action: 'Call us directly'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lobexglobal.com', 'quotes@lobexglobal.com'],
      action: 'Send us an email'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Freetown, Sierra Leone', 'Main Office & Warehouse'],
      action: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      action: 'Best time to reach us'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Get instant responses',
      action: () => window.open('https://wa.me/+23279041364', '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our updates',
      action: () => window.open('https://instagram.com/lobexglobal', '_blank'),
      color: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Connect with us',
      action: () => window.open('https://facebook.com/lobexglobal', '_blank'),
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Typically 21-28 days from order confirmation to delivery in Sierra Leone.'
    },
    {
      question: 'Do you handle customs clearance?',
      answer: 'Yes, we handle all customs procedures and documentation for you.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, mobile money, and cash payments.'
    },
    {
      question: 'Is there a minimum order quantity?',
      answer: 'Minimum orders vary by product category. Contact us for specific requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Let's Discuss Your 
              <span className="text-blue-600 block">Import Needs</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Ready to start importing? Get in touch with our team for a personalized 
              quote and discover how we can help grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Request a Quote</CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+232 XX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Category *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="construction">Construction Materials</SelectItem>
                            <SelectItem value="electronics">Electronics & Gadgets</SelectItem>
                            <SelectItem value="clothing">Clothing & Accessories</SelectItem>
                            <SelectItem value="machinery">Machinery & Vehicle Parts</SelectItem>
                            <SelectItem value="beauty">Salon & Beauty Supplies</SelectItem>
                            <SelectItem value="other">Other / Multiple Categories</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Priority</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="high">High Priority</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Product Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe what products you need, quantities, specifications, budget range, and any special requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Send Quote Request
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-slate-100">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-slate-900">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-sm">{detail}</p>
                        ))}
                        <p className="text-blue-600 text-xs">{info.action}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-slate-100">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`w-full p-4 rounded-lg text-white text-left transition-colors ${action.color}`}
                    >
                      <div className="flex items-center space-x-3">
                        <action.icon className="h-5 w-5" />
                        <div>
                          <div className="font-semibold">{action.title}</div>
                          <div className="text-sm opacity-90">{action.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Frequently Asked Questions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find quick answers to the most commonly asked questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-100">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Visit Our Office</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Location in Freetown
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop by our office and warehouse to see our operations firsthand.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">LOBEX Global Logistics</h3>
                        <p className="text-slate-600">Main Office & Warehouse</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900">Freetown, Sierra Leone</p>
                          <p className="text-slate-600 text-sm">Central business district location</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900">Modern Warehouse Facility</p>
                          <p className="text-slate-600 text-sm">Climate-controlled storage</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900">Easy Access</p>
                          <p className="text-slate-600 text-sm">Convenient parking available</p>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;