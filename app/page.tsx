'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Shield, Users, BarChart3, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg" />
            <span className="text-xl font-bold">SaaSify</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition">Testimonials</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Trusted by 10,000+ businesses worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Scale Your Business
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                With Modern SaaS
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Empower your team with cutting-edge tools designed to streamline operations, 
              boost productivity, and drive growth. Join the future of B2B software.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-sm text-slate-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <div className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-white/10 rounded-lg h-64 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white/60 text-4xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Everything You Need to Succeed</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Lightning Fast',
                description: 'Built for speed with optimized performance that scales with your business.'
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Enterprise Security',
                description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.'
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Team Collaboration',
                description: 'Work together seamlessly with real-time updates and intuitive workflows.'
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Advanced Analytics',
                description: 'Make data-driven decisions with comprehensive insights and reporting.'
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: '24/7 Support',
                description: 'Get help whenever you need it with our dedicated support team.'
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: 'Global Scale',
                description: 'Deploy worldwide with 99.99% uptime and low-latency infrastructure.'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-slate-600 mb-8">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              {['Acme Corp', 'TechCo', 'StartupXYZ', 'GlobalInc', 'Innovate'].map((company) => (
                <div key={company} className="text-2xl font-bold text-slate-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Loved by Teams Everywhere</h2>
            <p className="text-xl text-slate-600">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "This platform transformed how we work. Productivity is up 150% and our team couldn't be happier.",
                author: 'Sarah Johnson',
                role: 'CEO, TechStart',
                avatar: '👩'
              },
              {
                quote: "The best investment we've made. The ROI was clear within the first month of implementation.",
                author: 'Michael Chen',
                role: 'CTO, DataCorp',
                avatar: '👨'
              },
              {
                quote: "Outstanding support and features. It's like they built it specifically for our use case.",
                author: 'Emily Rodriguez',
                role: 'VP Operations, ScaleUp',
                avatar: '👩‍💼'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Choose the plan that's right for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                description: 'Perfect for small teams',
                features: ['Up to 10 users', '10GB storage', 'Basic analytics', 'Email support', 'API access']
              },
              {
                name: 'Professional',
                price: '$99',
                description: 'For growing businesses',
                features: ['Up to 50 users', '100GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations', 'SSO'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Unlimited users', 'Unlimited storage', 'Custom analytics', '24/7 phone support', 'Dedicated account manager', 'SLA guarantee']
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-slate-200 ${plan.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-slate-600 mt-2">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-slate-600 ml-2">/month</span>}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg" />
                <span className="text-xl font-bold text-white">SaaSify</span>
              </div>
              <p className="text-sm">
                Empowering businesses with modern SaaS solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            <p>&copy; 2024 SaaSify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
