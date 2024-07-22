// components/MagnifyHover.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface MagnifyHoverProps {
  children: React.ReactNode;
  scale?: number;
}

const MagnifyHover: React.FC<MagnifyHoverProps> = ({ children, scale = 1.2 }) => {
  return (
    <motion.div
      whileHover={{ scale: scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    className='text-pink-700'>
      {children}
    </motion.div>
  );
};

export default MagnifyHover;