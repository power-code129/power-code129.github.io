import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PreferredSkills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const passionAreas = {
    Languages: [
      { name: 'C' },
      'Python',
      'C++',
      'C#',
      'JavaScript',
      'HTML',
      'Verilog',
      'Matlab',
    ],
    Frameworks: [
      'React.js',
      'RESTful Web Services (REST)',
      'Tailwind CSS',
      'Node.js',
    ],
    Cloud: [
      'Cloud Computing',
      'AWS Elastic Beanstalk',
      'Cloud Security',
      'Google Cloud Platform',
      'Firebase',
      'Cloud Functions',
      'App Engine',
    ],
    Tools: [
      'Graphic Design',
      'Digital Marketing',
      'Adobe Photoshop',
      'Canva',
      'Git',
      'GitHub',
      'VS Code',
      'Figma',
      'Qwiklabs',
    ],
    Domains: [
      'Artificial Intelligence (AI)',
      'Machine Learning',
      'Data Science',
      'Algorithms',
      'Project Management',
      'Data Visualization',
      'ESG (Environmental, Social, Governance)',
      'Generative AI',
      'Communication & Professional Services',
      'Data Analytics',
      'Frontend Dev',
      'Internet of Things (IoT)',
    ],
  };

  // Certificates hosted on Google Drive (replace FILE_IDs)
  const certificates = {
    'Adobe Photoshop':'https://drive.google.com/file/d/1wiDuPBzTB4USd2VvvkXbSmmihsP3zslh/view?usp=drive_link',
    'Algorithms':'https://drive.google.com/file/d/1zGYg3AZ3aoSdiIO-PQH_4y6E1KuuuGOu/view?usp=drive_link',
    'Artificial Intelligence (AI)': 'https://drive.google.com/file/d/17M47HMogAkgYIMYdYhM9zD6q8HJI5Irv/view?usp=drive_link',
    'AWS Elastic Beanstalk': 'https://drive.google.com/file/d/1FTPPPFKd_ME9IoY_1Auwn4mPWfuh2ExN/view?usp=drive_link',
    'C': 'https://drive.google.com/file/d/1YhkT4UkFBCVxPOzTricLj4MVDa_vEqdi/view?usp=drive_link',
    'C++': 'https://drive.google.com/file/d/1BAClS53vc6QDLYvolizgvhMLXQ73q4H5/view?usp=drive_link',
    'Cloud Computing': 'https://drive.google.com/file/d/1axeHc-spiDhtV2KGEPW9WhW5JP2IjhuQ/view?usp=sharing',
    'Cloud Security': 'https://drive.google.com/file/d/1AJPWeSBuIB4bFzmDHKRsEus0O2XkU8VV/view?usp=drive_link',
    'Communication & Professional Services': 'https://drive.google.com/file/d/1PmOvNCw6ixBi8vKTc1eBM1mnx9Y64zTS/view?usp=drive_link',
    'Data Analytics': 'https://drive.google.com/file/d/1MWBxAUgcpykzgfm7gL85H-hKKX5vIqDo/view?usp=drive_link',
    'Digital Marketing': 'https://drive.google.com/file/d/1CtVADtF3v-x_UzyHetL-au3w6YsuoRdy/view?usp=drive_link',
    'ESG (Environmental, Social, Governance)': 'https://drive.google.com/file/d/1Ho-Vp67XpOKTmxGIDkQ2JTCAaipdRbQF/view?usp=drive_link',
    'Generative AI': 'https://drive.google.com/file/d/1hqsubb84oIx9Zq2hNxVgkdHvzsTNEsAK/view?usp=drive_link',
    'Internet of Things (IoT)': 'https://drive.google.com/file/d/1JabXYvuB-msjHYf1vlXvhQ9OsxmSkse2/view?usp=sharing',
    'Machine Learning': 'https://drive.google.com/file/d/114dfQKL4e3Zn9luDAl7aRHA41CADF6bE/view?usp=drive_link',
    'Python': 'https://drive.google.com/file/d/1Ahw4nUee0sNXrso-hzNd1UCxAJt9qWpI/view?usp=drive_link',
    'RESTful Web Services (REST)':'https://drive.google.com/file/d/14fws0hZZy59ZWnqf86fYaFhtrH0ZkHXN/view?usp=drive_link',
  };

  return (
    <section
      ref={ref}
      id="passion"
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-10 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-labelledby="passion-heading"
    >
      <h2
        id="passion-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-black mb-12 border-b-4 border-pink-500 inline-block pb-2"
      >
        Passion
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        {Object.entries(passionAreas).map(([category, items], index) => (
          <article
            key={index}
            className="bg-white/50 p-6 rounded-lg shadow-md"
            aria-label={`Passion category: ${category}`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-black">{category}</h3>
            <div className="flex flex-wrap gap-3 items-center">
              {items.map((item, i) => {
                const name = typeof item === 'string' ? item : item.name;
                const cert = certificates[name];

                return (
                  <span
                    key={i}
                    className={`bg-gradient-to-r ${
                      cert ? 'from-green-600 to-blue-500' : 'from-pink-600 to-blue-500'
                    } text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:from-blue-500 hover:to-blue-600 transition`}
                    aria-label={`Skill: ${name}`}
                  >
                    {name}
                    {cert && (
                      <a
                        href={cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View certificate for ${name}`}
                        className="ml-1 text-white-300 hover:text-yellow-400"
                      >
                        <FaCertificate />
                      </a>
                    )}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Button to Other Skills */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-700 mb-2 italic">This is a preview of my preferred skills.</p>
        <Link
          to="/other-skills"
          className="inline-block bg-pink-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          See Other Skills →
        </Link>
      </div>
    </section>
  );
}

export default PreferredSkills;
