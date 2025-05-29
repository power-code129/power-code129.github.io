import React from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = ['Python', 'C', 'React.js', 'Google Cloud Platform (GCP)', 'Artificial Intelligence (AI)'];

  return (
    <section
      ref={ref}
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-12 bg-[#dedbd2] rounded-2xl shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center gap-10 overflow-hidden"
      aria-label="About Me Section"
    >
      {/* Left side: Image */}
      <div
        className={`w-full md:w-1/2 lg:w-1/3 transform transition-all duration-1000 ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
        }`}
      >
        <img
          src="https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg"
          alt="Illustration of innovation"
          className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* Right side: Text */}
      <div
        className={`w-full md:w-1/2 transform transition-all duration-1000 delay-100 ${
          inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 border-b-4 border-pink-500 inline-block pb-2 transform transition duration-700 ease-in-out scale-100 hover:scale-105">
          About Me
        </h2>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed tracking-wide mb-6 text-justify">
          Hi there! I’m <span className="font-semibold text-pink-600">Priyanka Gandhi A</span>.  
          I’m passionate about building user-friendly applications that combine creativity and technology to solve real-world problems. I'm curious, driven, and always eager to learn something new. I love crafting intuitive experiences that make everyday life a little easier and more meaningful
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-pink-200 text-pink-800 font-semibold px-3 py-1 rounded-full text-sm select-none"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button for CV Download */}
        <a
          href="https://drive.google.com/file/d/1J4zNEKaOVbuwGYtyqcJ0Jbd3hm-wqwIL/view?usp=sharing"
          className="block w-full sm:inline-block sm:w-auto px-6 py-2 text-white font-medium bg-pink-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          title="Download Resume from Google Drive"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
