import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const OurFamilyOfCompanies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Construction fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Our Companies</h1>
          <p className="text-xl md:text-2xl opacity-90">Accelerating speed and capacity</p>
        </div>
      </section>

      {/* Companies Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Accelerating speed and capacity</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The reach of our expansive group of companies is built on our deep relationships with leading service providers, intensely focused on safety and quality, and located in every region. Our teams are ready with skilled personnel and state-of-the-art equipment and tooling. No matter the scope of work or promised deadline, find a JKC partner to match your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Company Profile</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jay Krishna Construction stands as a beacon of excellence in India's construction industry. With over 20 years of experience, we have established ourselves as a premier construction company specializing in infrastructure development, residential projects, and commercial construction.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our company operates across multiple states in India, with headquarters in Surat, Gujarat, serving a diverse clientele across multiple states.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">250+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Employees</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Construction work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Recognition & Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">Recognition & Certifications</h3>
          <p className="text-gray-700 text-center mb-12 leading-relaxed">
            Our commitment to excellence has been recognized through various industry awards and certifications.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">ISO</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600 text-sm">Quality Management</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">OHSAS</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">OHSAS 18001</h4>
              <p className="text-gray-600 text-sm">Safety Management</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">AWARD</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Excellence Award</h4>
              <p className="text-gray-600 text-sm">Industry Recognition</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">CERT</span>
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Industry Certified</h4>
              <p className="text-gray-600 text-sm">Professional Standards</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Our Service Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Infrastructure Development</h4>
              <p className="text-gray-700 leading-relaxed">
                Large-scale infrastructure projects including highways, bridges, airports, and urban development initiatives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Residential Construction</h4>
              <p className="text-gray-700 leading-relaxed">
                Modern residential complexes, luxury apartments, and sustainable housing solutions for urban communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Commercial Projects</h4>
              <p className="text-gray-700 leading-relaxed">
                Office buildings, shopping centers, industrial facilities, and specialized commercial structures.
              </p>
            </div>
          </div>
        </div>

        {/* Regional Presence */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Regional Presence</h3>
          <p className="text-gray-700 text-center mb-8 leading-relaxed">
            With strategic locations across India, we serve clients nationwide with local expertise and global standards.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-bold text-blue-600 mb-2">Western Region</h4>
              <p className="text-gray-600">Gujarat, Maharashtra, Rajasthan</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-blue-600 mb-2">Northern Region</h4>
              <p className="text-gray-600">Delhi, Punjab, Haryana</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-blue-600 mb-2">Southern Region</h4>
              <p className="text-gray-600">Karnataka, Tamil Nadu, Andhra Pradesh</p>
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

export default OurFamilyOfCompanies;