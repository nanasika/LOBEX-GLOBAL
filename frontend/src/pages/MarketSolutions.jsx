import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Store, 
  Monitor, 
  Wrench, 
  Scissors,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Package
} from 'lucide-react';
import { mockData } from '../mock';

const MarketSolutions = () => {
  const solutionIcons = {
    'Contractors': Building2,
    'Retailers': Store,
    'Online Sellers': Monitor,
    'Mechanics': Wrench,
    'Salon Owners': Scissors
  };

  const solutionColors = {
    'Contractors': 'bg-orange-50 text-orange-600 border-orange-200',
    'Retailers': 'bg-blue-50 text-blue-600 border-blue-200',
    'Online Sellers': 'bg-purple-50 text-purple-600 border-purple-200',
    'Mechanics': 'bg-green-50 text-green-600 border-green-200',
    'Salon Owners': 'bg-pink-50 text-pink-600 border-pink-200'
  };

  const industryStats = [
    { sector: 'Construction', growth: '25%', businesses: '150+' },
    { sector: 'Retail', growth: '18%', businesses: '200+' },
    { sector: 'E-commerce', growth: '40%', businesses: '80+' },
    { sector: 'Automotive', growth: '15%', businesses: '50+' },
    { sector: 'Beauty', growth: '30%', businesses: '70+' }
  ];

  const successFactors = [
    {
      icon: Package,
      title: 'Product Variety',
      description: 'Access to thousands of products across multiple categories'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Data-driven insights to help you make informed business decisions'
    },
    {
      icon: Users,
      title: 'Business Support',
      description: 'Dedicated account management and business development support'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">Market Solutions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Tailored Solutions for 
              <span className="text-blue-600 block">Every Business Type</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're a contractor, retailer, online seller, mechanic, or salon owner, 
              we have specialized solutions designed to meet your unique business needs and 
              help you succeed in the Sierra Leone market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Solutions by Industry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how LOBEX Global can support your specific industry with 
              targeted products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockData.marketSolutions.map((solution, index) => {
              const IconComponent = solutionIcons[solution.target];
              const colorClass = solutionColors[solution.target];
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-100">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {solution.target}
                          </h3>
                          <p className="text-slate-600">Specialized Solutions</p>
                        </div>
                      </div>

                      <p className="text-lg text-slate-600 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Key Benefits:</h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-slate-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Button asChild className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                          <Link to="/contact">
                            Get Custom Solution
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Market Performance</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industry Growth & Partnerships
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our success across different sectors demonstrates our ability to deliver 
              results for diverse business types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {industryStats.map((stat, index) => (
              <Card key={index} className="border-slate-100 text-center">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">{stat.sector}</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{stat.growth}</div>
                        <div className="text-sm text-slate-500">Growth Rate</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-blue-600">{stat.businesses}</div>
                        <div className="text-sm text-slate-500">Partners</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Success Factors</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Makes Our Solutions Effective
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The key elements that drive success for our business partners across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successFactors.map((factor, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <factor.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{factor.title}</h3>
                <p className="text-slate-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how businesses like yours have grown with LOBEX Global solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Kamara Construction</h3>
                  <p className="text-slate-600">
                    "LOBEX helped us reduce material costs by 40% while maintaining quality. 
                    Our project margins have improved significantly."
                  </p>
                  <div className="text-sm text-slate-500">- John Kamara, Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Store className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Tech Zone Freetown</h3>
                  <p className="text-slate-600">
                    "The electronics we source through LOBEX have excellent quality and 
                    competitive pricing. Our customers are always satisfied."
                  </p>
                  <div className="text-sm text-slate-500">- Fatima Sesay, Manager</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Glamour Hair Studio</h3>
                  <p className="text-slate-600">
                    "The salon equipment package was perfect for our new location. 
                    Training and support made setup seamless."
                  </p>
                  <div className="text-sm text-slate-500">- Adama Kargbo, Owner</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Find Your Perfect Business Solution
            </h2>
            <p className="text-xl text-blue-100">
              Don't see your industry listed? We work with businesses across all sectors. 
              Let's discuss how we can support your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100 px-8">
                <Link to="/contact">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                <Link to="/services">Browse All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketSolutions;