import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Quality: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Quality construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Quality</h1>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">JKC's Quality Management System (QMS)</h3>
              <p className="text-sm opacity-90">
                RIGHTPATH, JKC's QMS, is the preferred framework when ensuring excellence in our operations. Our structured approach and comprehensive training empowers our workforce.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">At JKC, We Prioritize Doing Things the RIGHTPATH</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>RIGHTPATH</strong> is our Quality Management System (QMS) and it is our preferred framework for ensuring excellence in our operations. Our structured approach and comprehensive training empower our workforce to proactively maintain and improve quality in all aspects of our business.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We adhere to all legal requirements and policies governing health and safety, sustainability, and codes of conduct for our industry.
              </p>
            </div>
          </div>

          {/* Quality Values */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Responsible.</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are capable. We understand and take great pride in our obligation to our customers and communities.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">Innovative.</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We continuously challenge ourselves to improve our performance and solve problems.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">Goal-oriented.</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are committed to accomplishing the targets set by both our internal and external customers.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">High Standards.</h4>
                <p className="text-gray-700 leading-relaxed">
                  We adhere to the highest standards and strive for excellence in all areas of our work.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Quality construction work"
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Yielding Excellence */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Construction excellence"
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Yielding Excellence.</h4>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to achieving excellence in all aspects and areas of our work.
                </p>
              </div>
            </div>
          </div>

          {/* We are Committed to Quality */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">We are Committed to Quality</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The team's goal is to provide a high-quality project while minimizing rework and expediting schedules. We have robust project processes in place to ensure our quality goals are met.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At the heart of our philosophy is a commitment to provide the highest level of professionalism and the best value to our customers on every project. JKC repeatedly demonstrates that commitment, completing all our projects on time, within budget and to the highest of quality standards. That level of performance doesn't happen by accident.
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

export default Quality;