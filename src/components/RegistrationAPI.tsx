
import React from 'react';
import TestCase from './TestCase';
import { motion } from 'framer-motion';

const RegistrationAPI: React.FC = () => {
  const requestData = {
    companyName: "goMart",
    ownerName: "Rahul",
    rollNo: "1",
    ownerEmail: "rahul@abc.edu",
    accessCode: "FKDLjG"
  };

  const responseData = {
    companyName: "goMart"
  };

  return (
    <motion.div 
      className="glass-morphism rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Registration</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
          <li>Before you start the test, you need to register with our Test Server.</li>
          <li>Your registration details, including Roll Number and Email, must align with your university/college email and roll number. (Email must support Google Form verified submission)</li>
          <li>The Access Code that you need to use to authenticate yourself before accessing the test server APIs has been shared on the email that you would have received. (Don't use the Access Code present in the example below. As the name suggests, it's only an example and won't work)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3">Registration API</h3>
        <p className="text-gray-700 mb-4">
          This is an API to register your company with the test server
        </p>
      </div>

      <TestCase 
        title="Request (POST)"
        requestUrl="http://20.244.56.144/test/register"
        responseData={requestData}
      />
      
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Response</h3>
        <p className="text-gray-700 mb-2">
          You can register only once and cannot get the credentials again. <span className="text-red-600 font-bold">DON'T FORGET TO SAVE THIS!</span>
        </p>
        <TestCase 
          responseData={responseData}
        />
      </div>
    </motion.div>
  );
};

export default RegistrationAPI;
