
import React from 'react';
import { ArrowRight, Brain, Users, BarChart3 } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';

interface GlassmorphicIconProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const GlassmorphicIcon = ({ children, gradientFrom, gradientTo }: GlassmorphicIconProps) => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    {/* Solid background color circle */}
    <div 
      className="absolute w-20 h-20 rounded-full"
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
    />
    {/* Soft glow/blur around the background */}
    <div 
      className="absolute w-20 h-20 rounded-full blur-lg opacity-50"
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
    />
    {/* Glassmorphic overlay on top */}
    <div 
      className="relative w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40"
      style={{ 
        background: `rgba(255, 255, 255, 0.15)`,
        boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.2), 0 8px 32px 0 ${gradientFrom}40`
      }}
    >
      {children}
    </div>
  </div>
);

interface ServicesSectionProps {
  invertColors?: boolean;
}

const ServicesSection = ({ invertColors = false }: ServicesSectionProps) => {
  return (
    <PageSection 
      title="Our Services" 
      subtitle="Comprehensive solutions to solve your business challenges" 
      invertColors={invertColors}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <ScrollAnimator animation="slide-in-up" delay={200}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="mb-4 flex justify-center">
              <GlassmorphicIcon gradientFrom="#8B5CF6" gradientTo="#A78BFA">
                <Brain className="w-7 h-7 text-white" strokeWidth={1.5} />
              </GlassmorphicIcon>
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">AI Solutions & Integration</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
              Our AI solutions are tailored to transform your business operations and enhance decision-making capabilities.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={400}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="mb-4 flex justify-center">
              <GlassmorphicIcon gradientFrom="#10B981" gradientTo="#34D399">
                <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
              </GlassmorphicIcon>
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Consulting and Advisory</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Strategic guidance from industry experts to optimize your technology investments and improve business processes. 
              We provide actionable insights to help you navigate digital transformation and achieve sustainable growth.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={600}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="mb-4 flex justify-center">
              <GlassmorphicIcon gradientFrom="#F59E0B" gradientTo="#FBBF24">
                <BarChart3 className="w-7 h-7 text-white" strokeWidth={1.5} />
              </GlassmorphicIcon>
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Business Intelligence</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              We help you make informed decisions through advanced analytics, reporting, and visualization tools.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default ServicesSection;
