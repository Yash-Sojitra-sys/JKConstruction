import React, { useState } from 'react';
import { MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Opportunities: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const jobOpenings = [
    {
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead civil engineering projects from design to completion. Manage project teams and ensure quality standards.",
      requirements: ["B.E./B.Tech in Civil Engineering", "5+ years experience", "Project management skills", "AutoCAD proficiency"]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "7-10 years",
      description: "Oversee large-scale construction projects, manage budgets, timelines, and coordinate with multiple stakeholders.",
      requirements: ["Engineering degree", "PMP certification preferred", "7+ years project management", "Leadership skills"]
    },
    {
      title: "Safety Engineer",
      department: "Safety",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      description: "Implement safety protocols, conduct site inspections, and ensure compliance with safety regulations.",
      requirements: ["Safety Engineering degree", "NEBOSH certification", "3+ years safety experience", "Risk assessment skills"]
    },
    {
      title: "Business Development Manager",
      department: "Business",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "5-7 years",
      description: "Identify new business opportunities, build client relationships, and drive revenue growth.",
      requirements: ["MBA preferred", "5+ years BD experience", "Construction industry knowledge", "Negotiation skills"]
    },
    {
      title: "Software Developer",
      department: "Technology",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop and maintain construction management software and digital solutions.",
      requirements: ["Computer Science degree", "React/Node.js experience", "2+ years development", "Problem-solving skills"]
    },
    {
      title: "Quality Control Specialist",
      department: "Quality",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "4-6 years",
      description: "Ensure construction quality standards, conduct inspections, and implement quality assurance processes.",
      requirements: ["Engineering degree", "Quality management experience", "Inspection skills", "Attention to detail"]
    }
  ];

  const departments = ['All', 'Engineering', 'Operations', 'Safety', 'Business', 'Technology', 'Quality'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Opportunities</h1>
          <p className="text-xl md:text-2xl opacity-90">Find Your Perfect Role</p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Current Openings</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore exciting career opportunities across various departments and locations.
          </p>
        </div>

        {/* Department Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{job.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.experience}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-gray-600 space-y-1">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No openings found for the selected department.</p>
          </div>
        )}
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Application Process</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Our streamlined application process is designed to be efficient and transparent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Apply Online</h3>
              <p className="text-gray-700 leading-relaxed">
                Submit your application and resume through our online portal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Initial Review</h3>
              <p className="text-gray-700 leading-relaxed">
                Our HR team reviews your application and qualifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Interview Process</h3>
              <p className="text-gray-700 leading-relaxed">
                Multiple rounds of interviews with hiring managers and team members.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Welcome Aboard</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive onboarding and orientation program for new hires.
              </p>
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

export default Opportunities;