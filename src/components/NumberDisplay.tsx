
import React from 'react';
import { motion } from 'framer-motion';

interface NumberDisplayProps {
  title: string;
  data: {
    windowPrevState?: number[];
    windowCurrentState?: number[];
    numbers?: number[];
    avg?: number;
  };
  isLoading?: boolean;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ title, data, isLoading = false }) => {
  const { windowPrevState = [], windowCurrentState = [], numbers = [], avg = 0 } = data;

  const formatNumberArray = (arr: number[]): string => {
    return JSON.stringify(arr);
  };

  return (
    <motion.div
      className="mb-6 bg-white rounded-lg shadow-subtle p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-lg font-semibold mb-3 text-affordmed-blue">{title}</h3>
      
      {isLoading ? (
        <div className="animate-pulse flex flex-col space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <div className="json-response">
          {`{`}
          <div className="pl-4">
            {windowPrevState && (
              <div>
                "windowPrevState": {formatNumberArray(windowPrevState)},
              </div>
            )}
            {windowCurrentState && (
              <div>
                "windowCurrentState": {formatNumberArray(windowCurrentState)},
              </div>
            )}
            {numbers && numbers.length > 0 && (
              <div>
                "numbers": {formatNumberArray(numbers)}, // response received from 3rd party server
              </div>
            )}
            {typeof avg === 'number' && (
              <div>
                "avg": {avg}
              </div>
            )}
          </div>
          {`}`}
        </div>
      )}
    </motion.div>
  );
};

export default NumberDisplay;
