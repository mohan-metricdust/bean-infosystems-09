import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to='/'>
            <img 
              src="/lovable-uploads/f3e399f8-7966-46c6-9a9b-c467e8887e83.png" 
              alt="Bean Logo" 
              style={{width:100, height:60, marginLeft:80}}
            />
            </Link>
            
            <p className="text-gray-700 mb-4">
              Bean Infosystems is leading Technology Company delivering an array of cutting-edge technology solutions and services. Our mission is to deliver superior software and services to empower the people to make the right decisions.
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">SERVICES</h3>
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
                <Link to="/services/business-intelligence" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-gray-600 hover:text-[#D4A76A] transition-colors">
                  Data & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Clients</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Trainings</a>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Careers</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Social Impact</a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#D4A76A] transition-colors">Contact-Us</Link>
              </li>
            </ul>
          </div>

          {/* Addresses */}
          <div className="space-y-6">
            {/* United States */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">UNITED STATES</h3>
              <div className="flex items-start space-x-3">
                <img src='https://www.beaninfosys.com/img/usa.png' height={50} width={50}/>
                <span className="text-gray-600 text-sm">
                  8751 Collin Mckinney Pkwy #201<br />
                  Mckinney, TX, USA 75070
                </span>
              </div>
            </div>

            {/* India */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">INDIA</h3>
              <div className="flex items-start space-x-3">
                <img src="https://www.beaninfosys.com/img/india.png" height={50} width={50} />
                <span className="text-gray-600 text-sm">
                  Workafella, Western Aqua 5th Floor #Suite 139,<br />
                  5th Floor, Whitefield's, Hitech City<br />
                  Hyderabad, Telangana India 500081
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bean InfoSystems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
