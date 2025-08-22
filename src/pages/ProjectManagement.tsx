import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const ProjectManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Project management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Project Management</h1>
          <p className="text-xl md:text-2xl opacity-90">Expert Project Leadership & Execution</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Professional Project Management</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our project management services ensure successful delivery of construction projects from initiation to completion. We provide experienced project managers who coordinate all aspects of project execution, maintaining quality, schedule, and budget objectives.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Using industry-standard methodologies and advanced project management tools, we deliver projects that meet or exceed client expectations while maintaining the highest standards of safety and quality.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-gray-600">Projects Managed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Project management"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Project Management Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Comprehensive project management solutions for successful project delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Project Planning</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive project planning and strategy development for successful execution.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Scope Definition</li>
                <li>• Work Breakdown Structure</li>
                <li>• Schedule Development</li>
                <li>• Resource Planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Execution Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Active management and coordination of project execution activities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Team Coordination</li>
                <li>• Progress Monitoring</li>
                <li>• Quality Control</li>
                <li>• Issue Resolution</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Risk Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Proactive identification and management of project risks and issues.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Risk Assessment</li>
                <li>• Mitigation Planning</li>
                <li>• Contingency Management</li>
                <li>• Issue Tracking</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Budget Control</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Comprehensive budget management and cost control throughout the project.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cost Estimation</li>
                <li>• Budget Tracking</li>
                <li>• Change Management</li>
                <li>• Financial Reporting</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Communication Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Effective communication and stakeholder management throughout the project.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Stakeholder Engagement</li>
                <li>• Progress Reporting</li>
                <li>• Meeting Management</li>
                <li>• Documentation Control</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Project Closure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Systematic project closure and handover processes for successful completion.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Final Deliverables</li>
                <li>• Documentation Handover</li>
                <li>• Lessons Learned</li>
                <li>• Performance Evaluation</li>
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

export default ProjectManagement;