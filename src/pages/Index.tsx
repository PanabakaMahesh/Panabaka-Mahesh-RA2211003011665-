
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AverageCalculator from '@/components/AverageCalculator';
import AuthorizationTokenAPI from '@/components/AuthorizationTokenAPI';
import RegistrationAPI from '@/components/RegistrationAPI';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
    </div>
  );
};

export default Index;
