import React, { useState } from 'react';

const Home = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(number);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      <button 
        onClick={generateRandomNumber}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Generate
      </button>
      {randomNumber !== null && (
        <p className="text-lg mt-4">Generated Number: <strong>{randomNumber}</strong></p>
      )}
    </div>
  );
};

export default Home;
