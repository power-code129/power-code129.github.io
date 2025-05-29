import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Passion from './components/PreferredSkills';
import Performance from './components/Performance';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MoreWorks from './components/MoreWorks';
import Contact from './components/Contact';
import OtherSkills from './components/OtherSkills';

function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      requestAnimationFrame(() => {
        const heroEl = document.getElementById('hero');
        if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Clear scrollTo after scroll to prevent repeated scroll on re-renders
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  return null;
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Passion />
      <Performance />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/">
      <div className="bg-[#edafb8] min-h-screen text-black scroll-smooth">
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-works" element={<MoreWorks />} />
          <Route path="/other-skills" element={<OtherSkills />} />
        </Routes>
      </div>
    </Router>
  );
}
