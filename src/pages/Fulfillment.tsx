import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Fulfillment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Fulfillment operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-indigo-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Fulfillment</h1>
          <p className="text-xl md:text-2xl opacity-90">Complete Project Fulfillment Solutions</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Comprehensive Fulfillment Services</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our fulfillment division provides end-to-end project completion services, ensuring that every aspect of your construction project is delivered on time, within budget, and to the highest quality standards.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              From procurement and logistics to final installation and commissioning, we manage the entire fulfillment process with precision and attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Fulfilled</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Fulfillment operations"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Fulfillment Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Complete project fulfillment from planning to final delivery and commissioning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Procurement Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Strategic sourcing and procurement of materials, equipment, and services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Vendor Selection</li>
                <li>• Contract Negotiation</li>
                <li>• Quality Assurance</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Logistics & Supply Chain</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Efficient logistics management and supply chain optimization.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory Management</li>
                <li>• Transportation Planning</li>
                <li>• Warehouse Operations</li>
                <li>• Delivery Scheduling</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Installation Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Professional installation and commissioning of equipment and systems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Equipment Installation</li>
                <li>• System Integration</li>
                <li>• Testing & Commissioning</li>
                <li>• Performance Validation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Project Coordination</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive project coordination and management services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Schedule Management</li>
                <li>• Resource Allocation</li>
                <li>• Progress Tracking</li>
                <li>• Stakeholder Communication</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Quality Control</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rigorous quality control and assurance throughout the fulfillment process.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inspection Services</li>
                <li>• Compliance Verification</li>
                <li>• Documentation</li>
                <li>• Corrective Actions</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Post-Delivery Support</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ongoing support and maintenance services after project completion.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Warranty Management</li>
                <li>• Technical Support</li>
                <li>• Maintenance Services</li>
                <li>• Performance Monitoring</li>
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

export default Fulfillment;