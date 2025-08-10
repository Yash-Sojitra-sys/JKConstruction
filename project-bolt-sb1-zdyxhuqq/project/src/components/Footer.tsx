import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.ibb.co/KcXsDnXG/JKC-WHITE-BACKGROUND.png" 
                alt="JKC Logo"
                className="w-24 h-24 object-contain"
              />
              <span className="text-3xl font-bold text-gray-900">JKC</span>
            </Link>
            <p className="text-gray-600 mb-6 text-lg font-medium">Jay Krishna Construction</p>
            <div className="text-gray-600 text-base space-y-2">
              <p>300 Banyan Boulevard, Suite 1101</p>
              <p>West Palm Beach, FL 33401</p>
              <p className="mt-4 font-medium">561.627.7171</p>
              <p className="font-medium">info@jaykrishnaconstruction.com</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Linkedin className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800" />
              <Youtube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-800" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg mt-8">Company</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/our-company" className="hover:text-blue-600 transition-colors">Our Companies</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Quality</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg mt-8">Services</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Project Management</a></li>
              <li><Link to="/civil-construction" className="hover:text-blue-600 transition-colors">Civil Construction</Link></li>
              <li><Link to="/infrastructure" className="hover:text-blue-600 transition-colors">Infrastructure Development</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Engineering</a></li>
              <li><Link to="/residential" className="hover:text-blue-600 transition-colors">Residential Projects</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Fulfillment</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Maintenance Restoration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg mt-8">Careers</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li><Link to="/about-our-careers" className="hover:text-blue-600 transition-colors">About Our Careers</Link></li>
              <li><Link to="/opportunities" className="hover:text-blue-600 transition-colors">Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg mt-8">Investor Relations</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Events & Presentations</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Financials & Filings</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Stock Information</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Shareholder Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-10">
          <p className="text-center text-base text-gray-500">
            © 2025 Jay Krishna Construction | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;