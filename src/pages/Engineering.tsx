import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Engineering: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Engineering design work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-purple-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Engineering</h1>
          <p className="text-xl md:text-2xl opacity-90">Innovative Solutions Through Expert Engineering</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Engineering Excellence</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our engineering division provides comprehensive design and technical solutions for complex infrastructure projects. From initial concept to final implementation, our experienced engineers deliver innovative solutions that meet the highest standards of quality and performance.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With expertise across multiple engineering disciplines, we support projects ranging from telecommunications infrastructure to civil construction, ensuring optimal design and efficient execution.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Projects Designed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862600/pexels-photo-3862600.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Engineering design work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Engineering Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines and project types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Civil Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Structural design and civil engineering solutions for infrastructure projects.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Structural Design</li>
                <li>• Site Development</li>
                <li>• Foundation Engineering</li>
                <li>• Drainage Systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Telecommunications Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Specialized engineering for telecommunications and network infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Network Design</li>
                <li>• RF Engineering</li>
                <li>• Fiber Optic Design</li>
                <li>• System Integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Electrical Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Power systems and electrical infrastructure design and implementation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Power Distribution</li>
                <li>• Control Systems</li>
                <li>• Lighting Design</li>
                <li>• Emergency Systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Project Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive project engineering and technical management services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical Planning</li>
                <li>• Design Coordination</li>
                <li>• Quality Assurance</li>
                <li>• Risk Assessment</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Environmental Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Environmental impact assessment and sustainable design solutions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Environmental Studies</li>
                <li>• Sustainability Planning</li>
                <li>• Compliance Assessment</li>
                <li>• Green Technologies</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">CAD & Design Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Advanced computer-aided design and technical documentation services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 3D Modeling</li>
                <li>• Technical Drawings</li>
                <li>• As-Built Documentation</li>
                <li>• Design Visualization</li>
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

export default Engineering;