
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

const GlassmorphicIcon = ({ children }: GlassmorphicIconProps) => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    {/* Glassmorphic container with clipped background */}
    <div 
      className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center"
      style={{ 
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: `0 0 20px rgba(147, 51, 234, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)`,
      }}
    >
      {/* Gradient background blob - offset to show white space at top */}
      <div 
        className="absolute"
        style={{ 
          background: `linear-gradient(135deg, hsl(220, 70%, 25%), hsl(270, 70%, 45%))`,
          top: '15%',
          left: '-10%',
          right: '-10%',
          bottom: '-10%',
          borderRadius: '50%',
        }}
      />
      {/* Soft inner glow for depth */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ 
          background: `radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.6), transparent 60%)`,
        }}
      />
      {/* Frosted glass overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ 
          background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))`,
        }}
      />
      {/* Pastel reflection highlight */}
      <div 
        className="absolute w-8 h-2 rounded-full opacity-40"
        style={{ 
          background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)`,
          top: '20%',
          left: '15%',
          transform: 'rotate(-20deg)',
        }}
      />
      {/* Icon */}
      <div className="relative z-10">
        {children}
      </div>
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
