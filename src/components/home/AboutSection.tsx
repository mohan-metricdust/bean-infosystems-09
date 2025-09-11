
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';

interface AboutSectionProps {
  invertColors?: boolean;
}

const AboutSection = ({ invertColors = false }: AboutSectionProps) => {
  const textColor = "text-gray-700"; // Changed to dark grey
  
  return (
    <PageSection invertColors={invertColors}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ScrollAnimator animation="slide-in-left" className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4 text-[#3F321F]">Transforming Ideas into Digital Reality</h3>
          <p className={`${textColor} mb-4`} style={{ color: '#333333' }}>
            At BeanInfo System, we envision a world where technology empowers businesses to achieve their fullest potential. 
            Our mission is to deliver exceptional digital experiences through innovative software solutions and strategic partnerships.
          </p>
          <p className={`${textColor} mb-6`} style={{ color: '#333333' }}>
            We combine technical expertise with deep industry knowledge to create tailor-made solutions that address complex business challenges. 
            Our approach is collaborative, agile, and focused on delivering measurable results that drive growth and efficiency.
          </p>
          <div className="flex justify-center mb-4">
            <Link to="/about" className={`${textColor} flex items-center font-medium hover:underline interactive`} style={{ color: '#333333' }}>
              Learn more about us
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-right" className="order-1 md:order-2">
          <div className="overflow-hidden shadow-xl rounded-lg">
            <div className="relative aspect-video">
              {/* Using the uploaded image without text overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F321F]/20 to-black/60 z-10 rounded-lg"></div>
              <img 
                src="/lovable-uploads/6fd8e0e8-c475-451b-9d34-687fd32b515b.png" 
                alt="BeanInfo System" 
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Removed the brand name overlay */}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default AboutSection;
