import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const moreWorks = [
  {
    title: 'Temperature & Humidity Control System',
    description:
      'Embedded system project using ESP32 and DHT11 to monitor and control environmental parameters.',
    tech: ['C++', 'ESP32', 'IoT', 'Sensor', 'Microcontroller'],
    demo: '#',
    code: 'https://github.com/power-code129/temperature-and-humidity-control',
  },
  {
    title: 'Patient Monitoring System',
    description:
      'Monitors vital parameters using C++ based embedded system. Useful in smart healthcare solutions.',
    tech: ['C++', 'Embedded Systems', 'Sensors'],
    demo: '#',
    code: 'https://github.com/power-code129/Patient-monitoring-system',
  },
  {
    title: 'Astable Multivibrator',
    description:
      'Circuit simulation and analysis of an astable multivibrator for pulse generation applications.',
    tech: ['Electronics', 'Simulation', 'Multisim'],
    demo: '#',
    code: 'https://github.com/power-code129/Astable-Multivibrator',
  },
  {
    title: 'Traffic Controller (Verilog)',
    description:
      'Digital design of a traffic control system using Verilog HDL.',
    tech: ['Verilog', 'Digital Logic Design', 'FPGA'],
    demo: '#',
    code: 'https://github.com/power-code129/Traffic-Controller',
  },
  {
    title: '4-Bit Comparator using Switch-Level Modelling',
    description:
      'Verilog HDL implementation of a 4-bit comparator circuit using switch-level modeling.',
    tech: ['Verilog', 'Switch-Level Modelling'],
    demo: '#',
    code: 'https://github.com/power-code129/4-BIT-COMPARATOR-USING-SWITCH-LEVEL-MODELLING-',
  },
  {
    title: 'Boolean Functions using Switch-Level Modelling',
    description:
      'Various boolean functions implemented with low-level Verilog modeling.',
    tech: ['Verilog', 'Digital Design'],
    demo: '#',
    code: 'https://github.com/power-code129/BOOLEAN-FUNCTIONS-USING-SWITCH-LEVEL-MODELLING-',
  },
  {
    title: '8x1 Multiplexer (MUX)',
    description:
      'Digital implementation of an 8x1 multiplexer using Verilog HDL.',
    tech: ['Verilog', 'MUX', 'Digital Electronics'],
    demo: '#',
    code: 'https://github.com/power-code129/8x1MUX',
  },
  {
    title: 'Create Your Own Radio Signal',
    description:
      'Scilab-based simulation to synthesize custom radio signals using sine wave synthesis.',
    tech: ['Scilab', 'Signal Processing'],
    demo: '#',
    code: 'https://github.com/power-code129/Create-the-own-radio-signal',
  }
];

function MoreWorks() {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 py-16 my-16 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center text-black mb-12 border-b-4 border-pink-500 inline-block pb-2">
        More Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {moreWorks.map((proj, index) => (
          <div
            key={index}
            className="bg-white/45 backdrop-blur-lg rounded-xl p-6 text-black hover:shadow-2xl transition hover:scale-[1.02] min-w-0 break-words"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 w-full sm:w-auto"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 shadow-lg hover:shadow-xl text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 w-full sm:w-auto"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Projects button */}
      <div className="text-center mt-10">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="inline-block bg-pink-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}

export default MoreWorks;
