import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Eye, 
  Globe, 
  Award, 
  TrendingUp,
  Heart,
  Shield,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Rebecca Marian Bhonopa",
      role: "Co-Founder & Managing Director",
      experience: "15+ years in international trade",
      specialization: "China market relations and logistics"
    },
    {
      name: "Mrs. Loretta Abban Mensah",
      role: "Co-Founder & Operations Director", 
      experience: "12+ years in supply chain management",
      specialization: "Local market development and customer relations"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain rigorous quality standards for every product we import and distribute."
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Our customers' success drives everything we do, from sourcing to final delivery."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Bridging Sierra Leone businesses with global suppliers and manufacturers."
    },
    {
      icon: TrendingUp,
      title: "Growth Partnership",
      description: "We grow alongside our customers, supporting their expansion and success."
    }
  ];

  const achievements = [
    { number: "500+", label: "Businesses Served" },
    { number: "1000+", label: "Successful Shipments" },
    { number: "50+", label: "Product Categories" },
    { number: "99%", label: "Customer Retention" }
  ];

  const advantages = [
    "Direct partnerships with Chinese manufacturers",
    "Deep understanding of Sierra Leone market needs",
    "Comprehensive logistics and customs expertise",
    "Customer-focused approach to service delivery",
    "Wide range of product categories under one roof",
    "Competitive pricing through bulk consolidation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800">About LOBEX Global</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Connecting Sierra Leone to 
              <span className="text-blue-600 block">Global Opportunities</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Founded by experienced trade professionals, LOBEX Global Logistics has been 
              the trusted bridge between Sierra Leone businesses and global markets, 
              specializing in efficient import and distribution solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  LOBEX Global Logistics was founded with a clear vision: to make global trade 
                  accessible and profitable for Sierra Leone businesses. Our founders recognized 
                  the gap between local demand and international supply chains.
                </p>
                <p>
                  Through years of building relationships with manufacturers in China and 
                  understanding the unique needs of the Sierra Leone market, we've created 
                  a seamless import and distribution network that benefits everyone involved.
                </p>
                <p>
                  Today, we're proud to serve over 500 businesses across Sierra Leone, 
                  from small retailers to large contractors, helping them access quality 
                  products at competitive prices.
                </p>
              </div>
              <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Company Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold">2019</div>
                      <div className="text-blue-100">Founded in Freetown</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold">2020</div>
                      <div className="text-blue-100">Established China partnerships</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold">2022</div>
                      <div className="text-blue-100">Expanded to 5 product categories</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold">2025</div>
                      <div className="text-blue-100">500+ businesses served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Leadership Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Led by experienced professionals with deep expertise in international 
              trade and local market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="border-slate-100">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
                      <p className="text-blue-600 font-medium">{founder.role}</p>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p><strong>Experience:</strong> {founder.experience}</p>
                      <p><strong>Specialization:</strong> {founder.specialization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To bridge Sierra Leone businesses with global markets through reliable, 
                  efficient, and cost-effective import and distribution services, enabling 
                  local enterprises to compete and thrive in an interconnected world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become Sierra Leone's leading import and distribution company, 
                  recognized for excellence in customer service, product quality, 
                  and our contribution to the growth of local businesses and the economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-200">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose LOBEX</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Competitive Advantages
              </h2>
              <p className="text-lg text-slate-600">
                What sets us apart in the Sierra Leone import and distribution market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-slate-600">
              Join hundreds of Sierra Leone businesses that trust LOBEX Global Logistics 
              for their import and distribution needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;