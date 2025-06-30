import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHackerrank, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode, SiInfosys } from 'react-icons/si';

const platforms = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={40} className="text-yellow-400" />,
    stats: 'Solved 40+ problems, Ongoing learning',
    link: 'https://leetcode.com/u/Priyankagandhi2004/',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={40} className="text-green-600" />,
    stats: 'Solved 90+ problems, Ongoing learning',
    link: 'https://www.geeksforgeeks.org/user/2004apge5lk/?_gl=1*1vom4uu*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwyIPDBhDBARIsAHJyyVhv9e6H6bifd5nVjL7i5hG8TZcYvafkP3SV9iqIWQJE1puxfzqvL6YaAl5QEALw_wcB&gbraid=0AAAAAC9yBkB1GX6FZygGquVN-L_R5sGou',
  },
  {
    name: 'HackerRank',
    icon: <FaHackerrank size={40} className="text-green-500" />,
    stats: 'Solved 10+ problems, Ongoing learning',
    link: 'https://www.hackerrank.com/2004apgandhi/',
  },
  {
    name: 'Google Cloud Skill Boost',
    icon: <FaGoogle size={40} className="text-yellow-500" />,
    stats: 'Completed 100+ labs,Ongoing learning',
    link: 'https://www.cloudskillsboost.google/public_profiles/c1244eea-6016-4936-ba5d-4e7178e6f8cd',
  },
  {
    name: 'Microsoft Learn',
    icon: <FaMicrosoft size={40} className="text-blue-500" />,
    stats: 'Level: 9,Ongoing learning',
    link: 'https://learn.microsoft.com/en-us/users/priyankagandhiarokiaselvaraj-9521/achievements',
  },
  {
    name: 'Infosys Springboard',
    icon: <SiInfosys size={40} className="text-blue-400" />,
    stats: 'Ongoing learning',
    link: 'https://infyspringboard.onwingspan.com/web/en/app/profile/dashboard',
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
