
import React from 'react';
import TestCase from './TestCase';

const AuthorizationTokenAPI: React.FC = () => {
  const requestData = {
    companyName: "goMart",
    clientId: "37bb493c-73d3-47ea-8675-21f56ef9b735",
    clientSecret: "7kQxzXGNPasWAwCMA",
    ownerName: "Rahul",
    ownerEmail: "rahul@abc.edu",
    rollNo: "1"
  };

  const responseData = {
    token_type: "Bearer",
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYXBbdFpbMHlnSXIZXhuT3owZnEwQDMHjY4L CJpbiQUQxLioiLCJleHAiOjE3MzE9MjI4Mzl9.kZjP7skZ7e/EigG5Pk4GDMllzyGUyj3YU-4DsUsEw1", 
    expires_in: 1718835268
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Authorization Token API</h2>
        <p className="text-gray-700 mb-4">
          This is an API to obtain the Authorization Token for your company
        </p>
      </div>

      <TestCase 
        title="Request (POST)"
        requestUrl="http://20.244.56.144/test/auth"
        responseData={requestData}
      />
      
      <TestCase 
        title="Response: (Status Code: 200)"
        responseData={responseData}
      />
    </div>
  );
};

export default AuthorizationTokenAPI;
