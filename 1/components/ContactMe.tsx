// components/ContactMe.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inputVariants = {
    focus: { scale: 1.05, boxShadow: "0 0 8px rgb(79, 70, 229)" }
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0 0 15px rgb(79, 70, 229)" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="ml-[990px] min-h-screen flex items-center justify-center p-4 relative" 
         style={{background: 'url("/path-to-your-background-image.jpg") no-repeat center center fixed', backgroundSize: 'cover'}}>
      {/* Twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      {/* Contact form */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg w-full max-w-md relative z-10"
      >
        <motion.h2 
          className="text-3xl font-bold text-white mb-6 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          Contact Me
        </motion.h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <motion.div className="mb-4" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.2 }}>
            <motion.input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>
          <motion.div className="mb-4" initial={{ x: 50 }} animate={{ x: 0 }} transition={{ delay: 0.4 }}>
            <motion.input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>
          <motion.div className="mb-6" initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 0.6 }}>
            <motion.textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none h-32 resize-none"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>
          <motion.button 
            type="submit" 
            className="w-full bg-indigo-600 text-white p-2 rounded font-bold hover:bg-indigo-700 transition duration-300"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;