import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Benefits: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Employee benefits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Benefits</h1>
          <p className="text-xl md:text-2xl opacity-90">Comprehensive Benefits for Our Team</p>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Employee Benefits Package</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We offer comprehensive benefits designed to support your health, well-being, and financial security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Health & Wellness</h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Comprehensive Health Insurance</li>
              <li>• Dental and Vision Coverage</li>
              <li>• Mental Health Support</li>
              <li>• Wellness Programs</li>
              <li>• Fitness Center Access</li>
              <li>• Annual Health Check-ups</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Financial Benefits</h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Competitive Salary</li>
              <li>• Performance Bonuses</li>
              <li>• Retirement Plans</li>
              <li>• Employee Stock Options</li>
              <li>• Life Insurance</li>
              <li>• Financial Planning Support</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Work-Life Balance</h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Flexible Work Hours</li>
              <li>• Paid Time Off</li>
              <li>• Parental Leave</li>
              <li>• Remote Work Options</li>
              <li>• Employee Assistance Program</li>
              <li>• Family Support Services</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Professional Development</h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Training & Certification</li>
              <li>• Conference Attendance</li>
              <li>• Tuition Reimbursement</li>
              <li>• Professional Memberships</li>
              <li>• Career Coaching</li>
              <li>• Internal Mobility</li>
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

export default Benefits;