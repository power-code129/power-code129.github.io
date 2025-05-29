import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_my48brd',   // Replace with your Service ID
        'template_z8j52ui',  // Replace with your Template ID
        form.current,
        'SXsPwqkfK1LGOBxU9'       // Replace with your User ID (Public Key)
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          e.target.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          setStatus('Failed to send the message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`max-w-4xl mx-auto px-6 py-16 my-16 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-10 border-b-4 border-pink-400 inline-block pb-2">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="p-3 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-center mt-4 text-white font-semibold">{status}</p>
      )}

      <div className="mt-12 flex justify-center space-x-8 text-white text-3xl">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
