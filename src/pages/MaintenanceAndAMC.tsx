import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const MaintenanceAndAMC: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Maintenance work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-teal-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Maintenance & AMC</h1>
          <p className="text-xl md:text-2xl opacity-90">Annual Maintenance Contracts & Support Services</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Comprehensive Maintenance Solutions</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our Maintenance and Annual Maintenance Contract (AMC) services ensure the long-term performance and reliability of your infrastructure investments. We provide proactive maintenance solutions that minimize downtime and extend asset life.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With 24/7 support capabilities and experienced maintenance teams, we deliver cost-effective solutions that keep your operations running smoothly while protecting your investment.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Active Contracts</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Maintenance work"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Maintenance & AMC Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive maintenance solutions to keep your infrastructure operating at peak performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Preventive Maintenance</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Scheduled maintenance programs to prevent equipment failures and extend asset life.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular Inspections</li>
                <li>• Scheduled Servicing</li>
                <li>• Component Replacement</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Corrective Maintenance</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rapid response repair services to restore operations and minimize downtime.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emergency Repairs</li>
                <li>• Fault Diagnosis</li>
                <li>• Component Replacement</li>
                <li>• System Restoration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Annual Maintenance Contracts</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive AMC packages tailored to your specific requirements and budget.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Customized Packages</li>
                <li>• Fixed Annual Costs</li>
                <li>• Priority Support</li>
                <li>• Performance Guarantees</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Condition Monitoring</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Advanced monitoring systems to track asset health and predict maintenance needs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time Monitoring</li>
                <li>• Predictive Analytics</li>
                <li>• Trend Analysis</li>
                <li>• Alert Systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Spare Parts Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive spare parts inventory and supply chain management.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory Management</li>
                <li>• Supplier Relations</li>
                <li>• Quality Assurance</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Technical Support</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Expert technical support and consultation services for optimal system performance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Remote Support</li>
                <li>• On-site Assistance</li>
                <li>• Training Programs</li>
                <li>• Documentation</li>
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

export default MaintenanceAndAMC;