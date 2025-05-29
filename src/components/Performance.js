import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHackerrank, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode, SiCoursera } from 'react-icons/si';

const platforms = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={40} className="text-yellow-400" />,
    stats: 'Solved 120+ problems',
    link: 'https://leetcode.com/',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={40} className="text-green-600" />,
    stats: 'Solved 90+ problems',
    link: 'https://auth.geeksforgeeks.org/',
  },
  {
    name: 'HackerRank',
    icon: <FaHackerrank size={40} className="text-green-500" />,
    stats: 'Solved 100+ problems',
    link: 'https://www.hackerrank.com/',
  },
  {
    name: 'Google Cloud Skill Boost',
    icon: <FaGoogle size={40} className="text-yellow-500" />,
    stats: 'Completed 100+ labs',
    link: 'https://www.cloudskillsboost.google/',
  },
  {
    name: 'Microsoft Learn',
    icon: <FaMicrosoft size={40} className="text-blue-500" />,
    stats: 'Level: Intermediate',
    link: 'https://learn.microsoft.com/',
  },
  {
    name: 'Coursera',
    icon: <SiCoursera size={40} className="text-blue-400" />,
    stats: 'Completed 12+ courses',
    link: 'https://www.coursera.org/',
  },
];

function Performance() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="performance"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 my-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 border-b-4 border-pink-500 inline-block pb-2">
        Performance
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white/50 text-black p-6 rounded-lg shadow-md backdrop-blur-md flex flex-col items-center hover:scale-[1.02] transition"
          >
            {platform.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{platform.name}</h3>
            <p className="mb-2 text-center text-sm">{platform.stats}</p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Performance;
