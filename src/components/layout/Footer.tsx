
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/f3e399f8-7966-46c6-9a9b-c467e8887e83.png" 
              alt="Bean Logo" 
              style={{width:100, height:60, marginLeft:80}}
            />
            <p className="text-gray-700 mb-4">
              Empowering Digital Evolution through innovative software solutions.
            </p>
            <div className="flex space-x-7 ml-12">
              <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#D4A76A] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/application-development" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/consulting-services" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services/advisory-services" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  SocialBirds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#D4A76A] flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  123 Tech Drive, Innovation Valley,<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#D4A76A] flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#D4A76A] flex-shrink-0" />
                <span className="text-gray-600">contact@beaninfosystem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bean Info System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
