
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cog, Shield, ArrowRight, Bot, Database, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import serviceAiSolutions from '@/assets/service-ai-solutions.jpg';

const AiSolutions = () => {
  const capabilities = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models designed to solve your specific business challenges and automate complex processes.",
      icon: <Brain size={36} />
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual intervention.",
      icon: <Bot size={36} />
    },
    {
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights using advanced AI algorithms and analytics.",
      icon: <Database size={36} />
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, optimize operations, and make data-driven decisions.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Process Optimization",
      description: "AI-powered solutions to identify bottlenecks and optimize business processes for maximum efficiency.",
      icon: <Cog size={36} />
    },
    {
      title: "Intelligent Security",
      description: "Advanced AI security solutions to protect your systems and detect threats in real-time.",
      icon: <Shield size={36} />
    }
  ];

  const benefits = [
    {
      title: "Cutting-Edge Technology",
      description: "We stay at the forefront of AI innovation, utilizing the latest technologies and methodologies to deliver superior solutions.",
      icon: <Zap size={32} />
    },
    {
      title: "Industry Expertise",
      description: "Our team combines deep AI knowledge with extensive industry experience to create solutions that truly work.",
      icon: <Brain size={32} />
    },
    {
      title: "Scalable Solutions",
      description: "Our AI implementations are designed to scale with your business, adapting to changing needs and growing demands.",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <>
      <PageHero 
        title="AI Solutions & Integration" 
        subtitle="Harness the power of artificial intelligence to transform your business operations"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Intelligent Solutions for Modern Challenges</h2>
            <p className="text-foreground/70 mb-4">
              Artificial Intelligence is no longer a futuristic concept—it's a present-day necessity for businesses 
              looking to stay competitive. At Bean Infosystems, we specialize in developing and integrating AI solutions 
              that drive innovation, efficiency, and growth.
            </p>
            <p className="text-foreground/70 mb-4">
              Our AI expertise spans machine learning, natural language processing, computer vision, and predictive 
              analytics. We work closely with your team to identify opportunities where AI can make the biggest impact 
              on your business outcomes.
            </p>
            <p className="text-foreground/70">
              From automating routine tasks to uncovering hidden insights in your data, our AI solutions are designed 
              to enhance human capabilities and accelerate business success.
            </p>
          </div>
          <div className="relative">
            <img 
              src={serviceAiSolutions} 
              alt="AI Solutions - Neural network visualization and machine learning technology" 
              className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </PageSection>

      {/* Capabilities */}
      <PageSection dark title="Our AI Capabilities" subtitle="Comprehensive artificial intelligence solutions">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="mb-4">
                {capability.icon&& React.cloneElement(capability.icon, { 
                    color: '#3F321F'
                })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-foreground/70">
                {capability.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Why Choose Us */}
      <PageSection title="Why Choose Bean Infosystems for AI Solutions" subtitle="Experience the difference of working with AI experts">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="text-bean mb-4">
                {benefit.icon && React.cloneElement(benefit.icon, { 
                    color: '#3F321F'
                })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection dark>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Embrace AI Innovation?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Let's discuss how artificial intelligence can transform your business operations and drive unprecedented growth. 
            Our team is ready to help you unlock the potential of AI.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Get Started with AI
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default AiSolutions;
