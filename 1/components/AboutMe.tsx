// components/AboutMe.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import MagnifyHover from './MagnifyHover';
import { AuroraBackgroundDemo } from './AboutBack';

const AboutMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const interests = [
    { name: 'Web Development', icon: '💻' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Open Source Contribution', icon: '🌐' },
    { name: 'Reading Sci-Fi Novels', icon: '📚' }
  ];

  return (
    <motion.div
      className="min-h-screen mt-32 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto border-r-[90px] border-r-transparent">
        <motion.div
          className="bg-gray-700 shadow-xl rounded-lg overflow-hidden" /*here is the background color change */
          variants={itemVariants}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <MagnifyHover>
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src="/path-to-your-image.jpg" // Replace with your image path
                  alt="Profile picture"
                  width={192}
                  height={192}
                />
              </MagnifyHover>
            </div>
            <motion.div
              className="p-8"
              variants={itemVariants}
            >
              <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">About Eos Noctus</div>
              <motion.h1
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                whileHover={{ scale: 1.05, color: "#F54180" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Eos Noctus
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Your brief bio goes here. Describe yourself, your passion, and what drives you. Make it engaging and reflective of your personality!
              </motion.p>
            </motion.div>
          </div>
          
          <motion.div
            className="px-8 py-6 border-t border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-pink-500">Interests</h2>
            <motion.ul
              className="mt-4 grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {interests.map((interest) => (
                <motion.li
                  key={interest.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, color: "#C20E4D" }}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span>{interest.icon}</span>
                  <span>{interest.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            className="px-8 py-6 border-t border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-pink-500 mb-4">Connect with me</h2>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-300 hover:text-pink-500">
                <FaGithub size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-300 hover:text-pink-500">
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-300 hover:text-pink-500">
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;