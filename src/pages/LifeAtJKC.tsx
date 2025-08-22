import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const LifeAtJKC: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Life at JKC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Life at JKC</h1>
          <p className="text-xl md:text-2xl opacity-90">Experience Our Culture & Community</p>
        </div>
      </section>

      {/* Life at JKC Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Our Culture</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At JKC, we foster a collaborative, inclusive, and innovative work environment where every team member can thrive. Our culture is built on mutual respect, continuous learning, and shared success.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We believe in empowering our people to take ownership, make decisions, and contribute to meaningful projects that shape India's infrastructure landscape.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Values in Action</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              These values guide our daily interactions and decision-making processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                Encouraging creative thinking and new approaches to solve complex challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                Working together across teams and departments to achieve common goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Striving for the highest standards in everything we do.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Respect</h3>
              <p className="text-gray-700 leading-relaxed">
                Treating everyone with dignity and valuing diverse perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">What Makes JKC Special</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Growth Opportunities</h3>
            <p className="text-gray-700 leading-relaxed">
              Clear career progression paths with opportunities for advancement and skill development across various departments and specializations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Work-Life Balance</h3>
            <p className="text-gray-700 leading-relaxed">
              Flexible work arrangements and comprehensive benefits to support your personal life and well-being.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Meaningful Work</h3>
            <p className="text-gray-700 leading-relaxed">
              Contribute to projects that make a real difference in communities and help build India's future infrastructure.
            </p>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default LifeAtJKC;