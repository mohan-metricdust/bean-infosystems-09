import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Code, Users, BarChart, ArrowRight, Lightbulb, Images, Database, Activity, BarChart2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import AiServicesSection from '@/components/home/AiServicesSection';

const Services = () => {
  const services = [
    {
      title: "Application Development",
      description: "Custom software applications designed to meet your unique business requirements and drive digital transformation.",
      icon: <Code size={40} color='black'/>,
      link: "/services/application-development",
      benefits: [
        "Tailored solutions that perfectly match your needs",
        "Scalable architecture to grow with your business",
        "User-centric design for exceptional experiences",
        "Continuous support and maintenance"
      ]
    },
    {
      title: "Consulting Services",
      description: "Strategic guidance from industry experts to optimize your technology investments and improve business processes.",
      icon: <Users size={40} color='black'/>,
      link: "/services/consulting-services",
      benefits: [
        "Expert analysis of your current technology landscape",
        "Strategic roadmaps for digital transformation",
        "Technology selection and implementation guidance",
        "Process optimization recommendations"
      ]
    },
    {
      title: "Advisory Services",
      description: "Insights and recommendations to help you navigate digital trends and make informed business decisions.",
      icon: <BarChart size={40} color='black'/>,
      link: "/services/advisory-services",
      benefits: [
        "Industry trend analysis and insights",
        "Competitive landscape evaluation",
        "Risk assessment and mitigation strategies",
        "Innovation opportunity identification"
      ]
    }
  ];

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
      title: "Enterprise Digital Transformation",
      description: "Helping a Fortune 500 company modernize their legacy systems and adopt cloud technologies",
      category: "Application Development"
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
      title: "Data-Driven Decision Making",
      description: "Implementing analytics solutions to help businesses leverage their data for strategic insights",
      category: "Advisory Services"
    },
    {
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop",
      title: "Process Optimization",
      description: "Streamlining operations for a healthcare provider to improve patient care and reduce costs",
      category: "Consulting Services"
    }
  ];

  // New AI services case studies
  const aiCaseStudies = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
      title: "Predictive Maintenance System",
      description: "Implementing machine learning models to predict equipment failures before they occur, reducing downtime by 67%",
      category: "Machine Learning"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      title: "Real-time Data Analytics Platform",
      description: "Building a scalable analytics platform that processes over 10TB of data daily for actionable business insights",
      category: "Data Engineering"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      title: "Intelligent Customer Service Bot",
      description: "Developing an AI-powered chatbot that reduced customer service response times by 85% while maintaining high satisfaction",
      category: "Artificial Intelligence"
    }
  ];

  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive solutions to drive your digital success"
      />

      {/* Services Philosophy */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Service Philosophy</h2>
            <p className="text-foreground/70 mb-4">
              At Bean InfoSystems, we believe that technology should serve as an enabler for 
              business success. Our services are designed with this philosophy at the core, 
              focusing on delivering solutions that drive tangible business outcomes.
            </p>
            <p className="text-foreground/70 mb-4">
              We take a collaborative approach, working closely with our clients to understand 
              their unique challenges and objectives. This enables us to develop tailored 
              solutions that address specific needs rather than offering one-size-fits-all options.
            </p>
            <p className="text-foreground/70">
              Whether you're looking to develop a custom application, optimize your technology 
              investments, or gain strategic insights, our team of experts is ready to help you 
              navigate the complex digital landscape and achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-4">
              <Card className="p-4 flex items-center glass-card">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} color='black'/>
                </div>
                <span className="font-medium">Innovative</span>
              </Card>
              <Card className="p-4 flex items-center glass-card translate-y-6">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} color='black'/>
                </div>
                <span className="font-medium">Strategic</span>
              </Card>
            </div>
            <div className="space-y-4 pt-4">
              <Card className="p-4 flex items-center glass-card">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} color='black'/>
                </div>
                <span className="font-medium">Collaborative</span>
              </Card>
              <Card className="p-4 flex items-center glass-card translate-y-6">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} color='black'/>
                </div>
                <span className="font-medium">Results-Driven</span>
              </Card>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services Cards */}
      <PageSection dark title="Our Core Services" subtitle="Explore how we can help your business thrive">
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 ${index % 2 === 0 ? '' : ''}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="text-bean mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link} 
                    className="btn-primary inline-flex"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-bean/20 to-transparent rounded-xl p-8 flex items-center justify-center">
                    <div className="w-full max-w-xs aspect-square relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-bean opacity-10">
                          {React.cloneElement(service.icon, { size: 180 })}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-transparent to-background/80 rounded-xl">
                        <div className="text-center p-6">
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <p className="text-foreground/70 text-sm">
                            Tailored solutions for your unique business needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* AI & Data Services Section */}
      <PageSection title="AI & Data Services" subtitle="Unlock the potential of your data with our advanced AI solutions">
        <div className="mb-8">
          <p className="text-foreground/70 max-w-4xl mx-auto text-center mb-12">
            In today's data-driven world, organizations that effectively harness the power of AI and data analytics gain 
            significant competitive advantages. Our specialized team of data scientists, engineers, and AI specialists 
            delivers solutions that transform raw data into strategic assets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-l-4 border-l-bean">
              <div className="text-bean mb-4">
                <Database size={28} color='black'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-foreground/70">
                Our data engineering team builds robust, scalable data pipelines and infrastructure to ensure your data is accessible, reliable, and ready for analysis.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-bean">
              <div className="text-bean mb-4">
                <Activity size={28} color='black'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning & AI</h3>
              <p className="text-foreground/70">
                We develop and deploy machine learning models and AI solutions that automate processes, generate insights, and create new business opportunities.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-bean">
              <div className="text-bean mb-4">
                <BarChart2 size={28} color='black'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analytics & Visualization</h3>
              <p className="text-foreground/70">
                Transform complex datasets into clear, actionable insights through advanced analytics and intuitive visual representations.
              </p>
            </Card>
          </div>
        </div>
        
        <div className="space-y-8 mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">AI Success Stories</h3>
          {aiCaseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''} h-64 md:h-auto`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="text-bean mb-2 flex items-center">
                    {study.category === "Data Engineering" && <Database size={20} className="mr-2" />}
                    {study.category === "Machine Learning" && <Activity size={20} className="mr-2" />}
                    {study.category === "Artificial Intelligence" && <Activity size={20} className="mr-2" />}
                    <span className="text-sm">{study.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {study.description}
                  </p>
                  <Link 
                    to={`/case-studies/${index + 10}`} 
                    className="btn-primary inline-flex self-center"
                  >
                    View Case Study
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Case Studies Section */}
      <PageSection title="Success Stories" subtitle="Real-world examples of our services in action">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`overflow-hidden ${index % 2 === 0 ? '' : ''}`}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''} h-64 md:h-auto`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="text-bean mb-2 flex items-center">
                    <Images size={20} className="mr-2" />
                    <span className="text-sm">{study.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {study.description}
                  </p>
                  <Link 
                    to={`/case-studies/${index + 1}`} 
                    className="btn-primary inline-flex self-center"
                  >
                    View Case Study
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to discuss how our services can help you achieve your digital objectives 
            and drive business growth.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default Services;
