import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloud, FaCode, FaTools, FaProjectDiagram, FaMicrochip, FaDatabase, FaPaintBrush, FaRobot, FaUsers } from 'react-icons/fa';

const skills = {
  Languages: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'HTML', 'Verilog', 'VHDL', 'Embedded C', 'Assembly Language'],
  Frameworks: ['React.js', 'Tailwind CSS', 'Node.js'],
  Cloud: ['Amazon Web Services (AWS)', 'IBM Cloud', 'Google Cloud Platform', 'Firebase', 'Cloud Functions', 'App Engine', 'AWS Elastic Beanstalk', 'Amazon S3'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Qwiklabs', 'MATLAB / Simulink', 'Scilab', 'Cadence Design Systems', 'Advance Design System (ADS)', 'ModelSim', 'Xilinx ISE / Vivado', 'Icarus Verilog', 'GTKWave', 'Keil µVision', 'NI LabVIEW', 'LTspice', 'OrCAD', 'Eagle CAD', 'EasyEDA', 'Proteus', 'Multisim'],
  Domains: ['AI/ML', 'Data Analytics', 'Cloud Security', 'Frontend Development', 'Internet of Things (IoT)', 'Robotics', 'Cyber-Physical Systems', 'Biomedical Instrumentation', 'Renewable Energy Systems', 'Smart Grid', 'Industrial Automation (PLC, SCADA)'],
  ECE: [
    'Analog Communication', 'Digital Communication', 'Wireless Communication', 'Satellite Communication', 'Optical Communication', 'RF & Microwave Engineering', 
    'Antenna Design', 'Transmission Lines & Waveguides', 'Modulation Techniques', 'Electromagnetic Field Theory', 
    'Analog Electronics', 'Digital Electronics', 'Power Electronics', 'Electronic Devices and Circuits', 'Operational Amplifiers (Op-Amps)', 
    'CMOS Design', 'Mixed Signal Design', 'VLSI Design', 'FPGA Programming', 'Microprocessors', 'Microcontrollers',
    'Digital Signal Processing (DSP)', 'Filters (IIR, FIR)', 'Control Systems', 'Electrical Network Analysis'
  ],
  AI_ML: ['Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Deep Learning', 'Generative AI', 'Natural Language Processing (NLP)', 'Sentiment Analysis', 'Data Mining', 'Social Media Mining', 'IBM Watson', 'Watson AI', 'OpenAI', 'Kaggle', 'Anaconda'],
  DataTools: ['SQL', 'Microsoft Excel', 'Tableau Online', 'Data Entry', 'Data Analysis', 'Research Skills', 'Information Research'],
  Design: ['Adobe Creative Cloud', 'Illustrator', 'Photoshop', 'Canva', 'Figma', 'Logo Design', 'Typography', 'Color Theory', 'Image Design', 'Graphics', 'Brochures', 'Illustration', 'Drawing', 'Sketching', 'Presentation Design', 'Graphic Design Education', 'Computer Graphics Design'],
  SoftSkills: ['Communication', 'Writing', 'Presentation Skills', 'Trust Building', 'Teamwork', 'Problem Solving', 'Problem Analysis', 'Organizational Skills', 'Clear Vision', 'Easily Adaptable', 'Professional Services', 'English Proficiency'],
};

const categoryIcons = {
  Languages: <FaCode className="inline mr-2 text-pink-600" />,
  Frameworks: <FaProjectDiagram className="inline mr-2 text-pink-600" />,
  Cloud: <FaCloud className="inline mr-2 text-pink-600" />,
  Tools: <FaTools className="inline mr-2 text-pink-600" />,
  Domains: <FaProjectDiagram className="inline mr-2 text-pink-600" />,
  ECE: <FaMicrochip className="inline mr-2 text-pink-600" />,
  AI_ML: <FaRobot className="inline mr-2 text-pink-600" />,
  DataTools: <FaDatabase className="inline mr-2 text-pink-600" />,
  Design: <FaPaintBrush className="inline mr-2 text-pink-600" />,
  SoftSkills: <FaUsers className="inline mr-2 text-pink-600" />,
};

function OtherSkills() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'preferred-skills' } });
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center text-black mb-10 border-b-4 pb-2 border-pink-500">
        Other Skills
      </h1>

      {Object.entries(skills).map(([category, items], index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center flex-wrap">
            {categoryIcons[category]} <span>{category.replace('_', ' & ')}</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {items.map((skill, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 rounded-full text-sm hover:from-blue-700 hover:to-blue-600 transition duration-200 break-words"
                aria-label={`Other skill: ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 text-center">
        <button
          onClick={handleBackClick}
          className="inline-block bg-green-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
        >
          ← Back to Preferred Skills
        </button>
      </div>
    </div>
  );
}

export default OtherSkills;
