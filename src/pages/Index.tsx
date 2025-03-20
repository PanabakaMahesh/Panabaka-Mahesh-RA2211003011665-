
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AverageCalculator from '@/components/AverageCalculator';
import AuthorizationTokenAPI from '@/components/AuthorizationTokenAPI';
import RegistrationAPI from '@/components/RegistrationAPI';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

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
          <Separator className="my-8" />
          <AuthorizationTokenAPI />
          <Separator className="my-8" />
          <RegistrationAPI />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
