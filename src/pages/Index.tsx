
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AverageCalculator from '@/components/AverageCalculator';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main className="flex-grow px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AverageCalculator />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
