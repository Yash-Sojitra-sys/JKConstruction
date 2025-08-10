import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dos3cln9d/video/upload/v1750507839/construction_site_timelapse_vc7h3i.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Construction site aerial view"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            The People <span className="text-green-400 font-normal">Building</span> Excellence®
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">WORKING TOGETHER</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-blue-600 mb-6">In the Air and Underground™</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Jay Krishna Construction (JKC) is a leading provider of specialty contracting services to the infrastructure and construction industries throughout India. We supply the single most critical resource construction projects need: skilled people. We serve the nation from hundreds of field offices and are unparalleled in scope and scale.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our talented workforce of over 5,000 employees provides a wide array of specialty services including program management; planning; engineering and design; construction; maintenance; and fulfillment services for residential, commercial, and infrastructure projects.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <span>LEARN ABOUT OUR FAMILY OF COMPANIES</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/23mgV6vG/Whats-App-Image-2025-06-21-at-17-57-28-e4f6fcea.jpg" 
              alt="Construction workers"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600/80"></div>
        <img 
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              What we <span className="text-green-400">stand for</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Embracing a common vision of building India, JKC proudly builds infrastructure and partnerships nationwide. Our engaged workforce is key to meeting the needs of our customers by bringing and keeping communities connected. We live by our values at JKC. They guide our interactions with each other, with our customers, and with the communities where we live and work.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
              About Us
            </button>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;