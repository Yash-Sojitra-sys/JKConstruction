import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const AboutOurCareers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-cyan-600 to-cyan-800">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">About Our Careers</h1>
          <p className="text-xl md:text-2xl opacity-90">Your Journey to Excellence Starts Here</p>
        </div>
      </section>

      {/* Career Philosophy */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Our Career Philosophy</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At JKC, we believe that great careers are built on a foundation of continuous learning, meaningful work, and mutual respect. We're committed to creating an environment where every team member can thrive and reach their full potential.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our career development approach focuses on individual growth while contributing to collective success. We invest in our people because we know that their success drives our company's success.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From entry-level positions to senior leadership roles, we provide the support, resources, and opportunities needed to build a rewarding career in the construction industry.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Professional development"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Career Development Programs</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive programs designed to accelerate your professional growth and career advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Leadership Development</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Structured programs to develop leadership skills and prepare high-potential employees for management roles.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Management Training</li>
                <li>• Executive Coaching</li>
                <li>• Leadership Workshops</li>
                <li>• Strategic Thinking</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Technical Training</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Continuous technical skill development to keep pace with industry innovations and best practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical Certifications</li>
                <li>• Software Training</li>
                <li>• Safety Protocols</li>
                <li>• Industry Standards</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Mentorship Program</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pairing experienced professionals with emerging talent for guidance and career development.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• One-on-One Mentoring</li>
                <li>• Career Guidance</li>
                <li>• Skill Development</li>
                <li>• Network Building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Employee Benefits</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Comprehensive benefits package designed to support your health, well-being, and financial security.
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

      {/* Company Culture */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Culture</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              A collaborative, inclusive, and innovative work environment where everyone can contribute and succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Inclusion</h3>
              <p className="text-gray-700 leading-relaxed">
                Diverse and inclusive workplace where everyone feels valued and respected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                Teamwork and collaboration across all levels and departments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                Encouraging creative thinking and innovative solutions to challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Commitment to excellence in everything we do, from projects to people development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default AboutOurCareers;