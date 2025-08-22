import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const ConnectToOurCareers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Connect to careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-purple-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Connect to Our Careers</h1>
          <p className="text-xl md:text-2xl opacity-90">Join Our Growing Team</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">Connecting You to Possibilities</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Join Our Talent Network!</h3>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ready to take the next step in your career? Connect with us and discover exciting opportunities at Jay Krishna Construction. We're always looking for talented individuals who share our passion for excellence and innovation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Why Join Our Network?</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Get notified about new job openings</li>
                  <li>• Access to exclusive career opportunities</li>
                  <li>• Connect with our recruitment team</li>
                  <li>• Learn about company culture and benefits</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">What We Offer</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Competitive compensation packages</li>
                  <li>• Comprehensive benefits</li>
                  <li>• Professional development opportunities</li>
                  <li>• Collaborative work environment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Link 
            to="/upload-resume"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Connect with us!
          </Link>
        </div>

        {/* Career Areas */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Engineering & Technical</h4>
            <p className="text-gray-700 mb-4">
              Join our engineering teams working on cutting-edge infrastructure projects.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Civil Engineers</li>
              <li>• Project Managers</li>
              <li>• Site Engineers</li>
              <li>• Quality Specialists</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Business & Operations</h4>
            <p className="text-gray-700 mb-4">
              Drive business growth and operational excellence across our organization.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Business Development</li>
              <li>• Finance & Accounting</li>
              <li>• Human Resources</li>
              <li>• Operations Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Skilled Trades</h4>
            <p className="text-gray-700 mb-4">
              Hands-on construction roles for skilled craftspeople and technicians.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Construction Workers</li>
              <li>• Equipment Operators</li>
              <li>• Electricians</li>
              <li>• Safety Coordinators</li>
            </ul>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ConnectToOurCareers;