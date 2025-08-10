import React from 'react';
import { ChevronRight } from 'lucide-react';

const ConnectionSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-left">Connection with Intention</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
          Our team's performance and innovation is trusted by several of the country's most prominent brands on a daily basis, and we are constantly striving to meet and exceed expectations. Our mission, <strong><em>To Build Excellence™</em></strong>, guides our strategy to ensure we deliver for our people, communities and partners.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Safety</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe safety is more than rules and procedures – it's a mindset. Our safety program is our preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers workers to recognize and enforce natural safety techniques, so they always get home safe.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <span>Safety</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">People</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <span>People</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Reach</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The reach of our expansive group of companies is built on our deep relationships with leading developers and government bodies. Dedicated to safety and quality, we have the partners to meet the needs of every client, no matter the scope or deadline.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <span>Our Family of Companies</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;