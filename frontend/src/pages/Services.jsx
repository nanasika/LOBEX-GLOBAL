import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Smartphone, 
  Shirt, 
  Wrench, 
  Scissors,
  ArrowRight,
  CheckCircle,
  Star,
  Package,
  Truck,
  Shield
} from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const serviceIcons = {
    Building: Building,
    Smartphone: Smartphone,
    Shirt: Shirt,
    Wrench: Wrench,
    Scissors: Scissors
  };

  const processSteps = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "We source high-quality products directly from trusted manufacturers"
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Rigorous quality checks ensure every product meets our standards"
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Efficient shipping and delivery to your location in Sierra Leone"
    }
  ];

  const whyChooseUs = [
    "Direct manufacturer relationships",
    "Competitive pricing",
    "Quality assurance",
    "Fast delivery times",
    "Expert market knowledge",
    "Customer support"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Complete Import & Distribution 
              <span className="text-blue-600 block">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From construction materials to beauty supplies, we provide comprehensive 
              import solutions across multiple industries, connecting Sierra Leone 
              businesses with global suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockData.services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-slate-100">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-500">
                              <strong>Target:</strong> {service.targetMarket}
                            </div>
                            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                              <Link to="/contact">
                                Request Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our streamlined process ensures quality products reach you efficiently and reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Why LOBEX Global</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Your Trusted Import Partner
              </h2>
              <p className="text-lg text-slate-600">
                Experience the LOBEX difference with our comprehensive service advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Service Categories Overview
            </h2>
            <p className="text-lg text-slate-600">
              Compare our service offerings across different product categories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Category</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Target Market</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Key Benefits</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {mockData.services.map((service) => (
                  <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          {React.createElement(serviceIcons[service.icon], { className: "h-4 w-4 text-blue-600" })}
                        </div>
                        <span className="font-medium text-slate-900">{service.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{service.targetMarket}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {service.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="text-sm text-slate-600">• {feature}</div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Import with Confidence?
            </h2>
            <p className="text-xl text-blue-100">
              Let our experienced team handle your import needs while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100 px-8">
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;