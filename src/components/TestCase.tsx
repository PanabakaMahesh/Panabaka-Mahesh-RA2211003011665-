
import React from 'react';

interface TestCaseProps {
  title?: string;
  requestUrl?: string;
  responseData?: Record<string, any>;
}

const TestCase: React.FC<TestCaseProps> = ({ title, requestUrl, responseData }) => {
  const formatJsonValue = (value: any): string => {
    if (typeof value === 'string') {
      return `"${value}"`;
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  };

  return (
    <div className="mb-8">
      {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
      
      {requestUrl && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Request</h4>
          <a 
            href={requestUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            {requestUrl}
          </a>
        </div>
      )}
      
      {responseData && (
        <div>
          {!requestUrl && !title && (
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto border border-gray-200 text-left">
              {`{`}
              <div className="pl-4">
                {Object.entries(responseData).map(([key, value], idx) => (
                  <div key={idx}>
                    "{key}": {formatJsonValue(value)}
                    {idx < Object.entries(responseData).length - 1 && ','}
                  </div>
                ))}
              </div>
              {`}`}
            </div>
          )}
          {(requestUrl || title) && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Response</h4>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto border border-gray-200 text-left">
                {`{`}
                <div className="pl-4">
                  {Object.entries(responseData).map(([key, value], idx) => (
                    <div key={idx}>
                      {key === "access_token" ? (
                        <>"{key}": "{(value as string).substring(0, 100)}..."</>
                      ) : (
                        <>"{key}": {formatJsonValue(value)}</>
                      )}
                      {idx < Object.entries(responseData).length - 1 && ','}
                    </div>
                  ))}
                </div>
                {`}`}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestCase;
