import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [typingDone, setTypingDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewProjectsClick = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'projects' } });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-screen bg-[#edafb8] text-black px-6 sm:px-8 md:px-12"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-full overflow-x-hidden">
        <span
          className={`animate-typing whitespace-nowrap overflow-hidden pr-2 pb-1 leading-tight ${
            typingDone ? 'border-0' : 'border-r-4 border-black'
          }`}
        >
          Hi, I'm Priyanka Gandhi A
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl text-gray-800">
        Fusing AI and Web tech to solve real-world challenges
      </p>

      <div className="flex space-x-6 mb-8 justify-center">
        <a
          href="https://github.com/power-code129/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900 transition-colors duration-300"
        >
          <FaGithub className="text-3xl sm:text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/a-priyanka-gandhi-ece/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-800 transition-colors duration-300"
        >
          <FaLinkedin className="text-3xl sm:text-4xl" />
        </a>
        <a
          href="mailto:2004apgandhi@gmail.com"
          aria-label="Email"
          className="hover:text-red-700 transition-colors duration-300"
        >
          <FaEnvelope className="text-3xl sm:text-4xl" />
        </a>
      </div>

      <button
        onClick={handleViewProjectsClick}
        className="bg-pink-700 text-white px-6 sm:px-8 py-3 rounded font-semibold hover:bg-pink-500 transition shadow-md text-lg sm:text-xl"
      >
        View Projects
      </button>
    </section>
  );
};

export default Hero;
