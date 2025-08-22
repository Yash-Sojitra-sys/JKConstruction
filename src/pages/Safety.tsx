import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import AlwaysModal from '../components/AlwaysModal';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Safety: React.FC = () => {
  const [isAlwaysModalOpen, setIsAlwaysModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Construction safety"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Safety</h1>
          <p className="text-xl md:text-2xl opacity-90">Employee Health & Safety</p>
        </div>
      </section>

      {/* Safety Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Employee Health & Safety</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At JKC, safety is more than rules and procedures – it's a mindset. We are focused on training, engaging and empowering all our employees to recognize and mitigate hazards, so everyone gets home safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Safety Leadership</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Commit & Lead</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our executive and managerial leadership demonstrate their commitment to our safety program and supporting initiatives through various tools and actions, for example:
              </p>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Executive safety committee</li>
                <li>Monthly safety calls and annual safety management conferences</li>
                <li>Budget and resource allocation</li>
                <li>Leadership Engagement Program</li>
                <li>Safety & Operations Forums</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">JKC's Safety Management System (SMS)</h3>
              <p className="text-sm opacity-90">
                Headway, JKC's SMS, is the preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers workers.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Train & Engage</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Effective, consistent and deliberate communication is a critical component of our safety program. As an integral part of our safety process, all our team members, whether in the office or in the field, are required to undergo mandatory safety training. They are actively engaged in training, reporting and auditing safety programs and protocols daily.
          </p>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>Short-Service Employee Program</li>
            <li>Training Network, our enterprise resource sharing program</li>
            <li>Safety non-negotiables, foundational to our safety culture</li>
            <li>Subsidiary safety committees</li>
            <li>Stop work authority without reprisal</li>
            <li>Feedback loop, dedicated hotline</li>
            <li>Consistent communications and routine meetings</li>
            <li>Pulse Surveys</li>
            <li>Headway Recognition Program</li>
          </ul>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Identify & Mitigate</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Appropriate risk mitigation involves identifying potential risks to a project and implementing strategies to help prevent or reduce the risk. We employ several techniques through our on-site safety protocols to ensure we are continuously evaluating and minimizing our risk.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Green-Hat Program</li>
              <li>Job Hazard Analysis (JHA)</li>
              <li>The Job Task Safety Assessment (JTSA), a process performed prior to any work</li>
              <li>Incident & Near Miss Reporting</li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Evaluate & Improve</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cultivating a culture of accountability supports our vision of instinctual safety. We are duty-driven to support team members, provide consistent feedback and training and drive responsibility through education and rewards systems.
          </p>
        </div>

        {/* A.L.W.A.Y.S. Section */}
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">A.L.W.A.Y.S.</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe that to create a best-in-class safety program, all employees must commit to a core list of safeguards. The safeguards are designed to protect against the most common causes of severe injury. They are foundational to our safety culture.
          </p>
          <button 
            onClick={() => setIsAlwaysModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            CLICK TO VIEW
          </button>
        </div>
      </section>

      <AlwaysModal 
        isOpen={isAlwaysModalOpen} 
        onClose={() => setIsAlwaysModalOpen(false)} 
      />

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Safety;