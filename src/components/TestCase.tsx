
import React from 'react';
import { motion } from 'framer-motion';

interface TestCaseProps {
  title: string;
  requestUrl: string;
  responseData?: Record<string, any>;
}

const TestCase: React.FC<TestCaseProps> = ({ title, requestUrl, responseData }) => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Request</h4>
        <a 
          href={requestUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-affordmed-blue hover:underline"
        >
          {requestUrl}
        </a>
      </div>
      
      {responseData && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Response</h4>
          <div className="json-response">
            {`{`}
            <div className="pl-4">
              {Object.entries(responseData).map(([key, value], idx) => (
                <div key={idx}>
                  "{key}": {typeof value === 'object' ? JSON.stringify(value) : value}
                  {idx < Object.entries(responseData).length - 1 && ','}
                </div>
              ))}
            </div>
            {`}`}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TestCase;
