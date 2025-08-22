import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const LocatingAndSUE: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Utility locating work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 to-yellow-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Locating & SUE</h1>
          <p className="text-xl md:text-2xl opacity-90">Subsurface Utility Engineering & Locating Services</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Precision Utility Locating</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our Locating and Subsurface Utility Engineering (SUE) services provide accurate identification and mapping of underground utilities, ensuring safe and efficient construction operations while preventing costly utility strikes.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Using advanced detection technologies and proven methodologies, we deliver comprehensive utility information that supports informed decision-making throughout the project lifecycle.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Sites Surveyed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Utility locating work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Locating & SUE Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive subsurface utility engineering and locating solutions for safe construction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Utility Locating</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Precise location and marking of underground utilities using advanced detection equipment.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Electromagnetic Detection</li>
                <li>• Ground Penetrating Radar</li>
                <li>• Acoustic Location</li>
                <li>• Vacuum Excavation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">SUE Quality Levels</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive SUE services following industry standards and quality levels.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality Level A (Precise)</li>
                <li>• Quality Level B (Designating)</li>
                <li>• Quality Level C (Surveying)</li>
                <li>• Quality Level D (Existing Records)</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Utility Mapping</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Detailed mapping and documentation of subsurface utilities and infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• CAD Mapping</li>
                <li>• GIS Integration</li>
                <li>• 3D Modeling</li>
                <li>• As-Built Documentation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Damage Prevention</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Proactive damage prevention services to protect existing utilities during construction.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Risk Assessment</li>
                <li>• Protection Planning</li>
                <li>• Monitoring Services</li>
                <li>• Emergency Response</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Consulting Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Expert consulting on utility conflicts and construction planning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Conflict Analysis</li>
                <li>• Design Review</li>
                <li>• Cost Estimation</li>
                <li>• Project Planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Technology Solutions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Advanced technology solutions for utility detection and mapping.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Multi-Frequency Locators</li>
                <li>• GPR Systems</li>
                <li>• RFID Marking</li>
                <li>• Mobile GIS</li>
              </ul>
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

export default LocatingAndSUE;