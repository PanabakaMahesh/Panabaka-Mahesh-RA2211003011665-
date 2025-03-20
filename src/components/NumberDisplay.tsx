
import React from 'react';

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
    <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      
      {isLoading ? (
        <div className="animate-pulse flex flex-col space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto border border-gray-200 text-left">
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
    </div>
  );
};

export default NumberDisplay;
