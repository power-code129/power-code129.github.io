import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'IBM India Pvt Ltd',
    link: 'https://www.ibm.com/in-en',
    date: 'Jun 2024 - Jul 2024',
    description:
      'Built a Naive Bayes classifier using IBM Watson NLP and Scikit-learn to analyze IMDb review sentiment, improving classification accuracy by 86%.',
    icon: (
      <img
        src="/logos/ibm-logo.png"
        alt="IBM Logo"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    role: 'Graphic Design Intern',
    company: 'GAO Tek Inc',
    link: 'https://www.gaotek.com/',
    date: 'Dec 2023 - Jul 2024',
    description:
      'Designed digital marketing visuals using Photoshop and Canva, supporting 5-month-long product design and branding initiatives and created over 50 graphics for social media and marketing campaigns, enhancing brand visibility.',
    icon: (
      <img
        src="/logos/gaotek-logo.png"
        alt="GAO Tek Logo"
        className="w-6 h-6 object-contain"
      />
    ),
  },

  {
    role: 'Artificial Intelligence Intern',
    company: 'IBM India Pvt Ltd',
    link: 'https://www.ibm.com/in-en',
    date: 'Aug 2023 - Oct 2023',
    description:
      'Developed a Random Forest sentiment analysis model on a hotel review dataset with 77% accuracy; applied NLP preprocessing and collaborated with the dev team on model validation.',
    icon: (
      <img
        src="/logos/ibm-logo.png"
        alt="GAO Tek Logo"
        className="w-6 h-6 object-contain"
      />
    ),
  },
];

function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="experience"
      className={`max-w-4xl mx-auto px-6 py-16 my-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 border-b-4 border-pink-500 inline-block pb-2">
        Experience
      </h2>

      <div className="relative border-l-4 border-pink-500 ml-8">
        {experiences.map(({ role, company, link, date, description, icon }, idx) => (
          <div key={idx} className="mb-10 ml-12 relative">
            {/* Circle with white background centered exactly on timeline */}
            <span
              className="absolute -left-7 top-5 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md"
              style={{ transform: 'translateX(-100%)' }}
            >
              {icon}
            </span>

            <div className="bg-white/50 p-6 rounded-xl shadow-md backdrop-blur-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                <h3 className="text-2xl font-semibold text-pink-600">
                  {role}{' '}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline hover:text-gray-800 ml-2"
                  >
                    @ {company}
                  </a>
                </h3>
                <span className="text-sm text-gray-500 italic mt-1 sm:mt-0">{date}</span>
              </div>
              <p className="text-black leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
