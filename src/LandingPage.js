import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Flash Card App</h1>
      <button onClick={() => window.location.href = '/flashcards'}>Start Studying</button>
    </div>
  );
};

export default LandingPage;