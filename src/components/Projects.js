import React from 'react';  
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Audio Tone Generator',
    description: 'A digital signal processing project using Scilab to generate musical notes and chords via sine wave synthesis. Includes real-time playback, frequency scaling, and melody sequencing.',
    tech: ['Scilab', 'Signal Processing', 'Audio Engineering', 'VS Code'],
    demo: '#',  // Replace with actual link if available
    code: 'https://github.com/power-code129/Audio-Tone-generator',
  },
  {
    title: 'IMDb Reviews Sentiment & Emotion Analysis',
    description: 'Advanced NLP project analyzing IMDb reviews using sentiment classification and emotion detection with models like Random Forest, Naive Bayes, and Transformers. Includes TF-IDF, BERT embeddings, Streamlit UI, and REST API with Flask/FastAPI.',
    tech: ['Python', 'NLP', 'Jupyter', 'TF-IDF', 'Streamlit', 'Flask'],
    demo: '#',  // Replace with actual link if available
    code: 'https://github.com/power-code129/IMDB-data',
  },
  {
    title: 'Sentimental Analysis of Restaurant Management',
    description: 'NLP-based project analyzing restaurant reviews using TF-IDF, BERT embeddings, and ML models to classify sentiment.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'BERT', 'Streamlit'],
    demo: '#',  // Replace with Streamlit or Flask app link if available
    code: 'https://github.com/power-code129/Sentimental-analysis-of-Restaurant-Management',
  },

];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 my-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 border-b-4 border-pink-500 inline-block pb-2">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/45 backdrop-blur-lg rounded-xl p-6 text-black hover:shadow-2xl transition hover:scale-[1.02]"
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
            <div className="flex gap-4 mb-4">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 shadow-lg hover:shadow-xl text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/more-works"
          className="inline-block bg-pink-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          See More Works →
        </Link>
      </div>
    </section>
  );
}

export default Projects;
