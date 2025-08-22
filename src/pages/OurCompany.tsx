import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const OurCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Our company building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Our Company</h1>
          <p className="text-xl md:text-2xl opacity-90">Leading India's Infrastructure Revolution</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Company Profile</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Jay Krishna Construction stands as a beacon of excellence in India's construction industry. With over 20 years of experience, we have established ourselves as a premier construction company specializing in infrastructure development, residential projects, and commercial construction.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our company operates across multiple states in India, with headquarters in West Palm Beach, Florida, and regional offices strategically located to serve our diverse clientele effectively.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Employees</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Modern office building"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">What We Do</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Our comprehensive range of services covers every aspect of construction and infrastructure development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Infrastructure Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Large-scale infrastructure projects including highways, bridges, airports, and urban development initiatives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Residential Construction</h3>
              <p className="text-gray-700 leading-relaxed">
                Modern residential complexes, luxury apartments, and sustainable housing solutions for urban communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Commercial Projects</h3>
              <p className="text-gray-700 leading-relaxed">
                Office buildings, shopping centers, industrial facilities, and specialized commercial structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Recognition & Certifications</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our commitment to excellence has been recognized through various industry awards and certifications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-sm font-bold">ISO</span>
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">ISO 9001:2015</h3>
            <p className="text-gray-600 text-sm">Quality Management</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-sm font-bold">LEED</span>
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">LEED Certified</h3>
            <p className="text-gray-600 text-sm">Green Building</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-sm font-bold">OHSAS</span>
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">OHSAS 18001</h3>
            <p className="text-gray-600 text-sm">Safety Management</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-sm font-bold">AWARD</span>
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">Excellence Award</h3>
            <p className="text-gray-600 text-sm">Industry Recognition</p>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default OurCompany;