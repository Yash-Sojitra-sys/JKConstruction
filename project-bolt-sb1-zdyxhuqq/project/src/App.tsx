import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurCompany from './pages/OurCompany';
import Leadership from './pages/Leadership';
import WhatWeDo from './pages/WhatWeDo';
import CivilConstruction from './pages/CivilConstruction';
import Infrastructure from './pages/Infrastructure';
import Residential from './pages/Residential';
import Careers from './pages/Careers';
import AboutOurCareers from './pages/AboutOurCareers';
import Opportunities from './pages/Opportunities';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/civil-construction" element={<CivilConstruction />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about-our-careers" element={<AboutOurCareers />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;