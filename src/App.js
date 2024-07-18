// src/App.js
import React from 'react';
import FlashCardList from './FlashCardList';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import flashcards  from './questions';

const App = () => {
  return (
    <div className="App">
      <h1>Civil Law Flash Cards</h1>
      <FlashCardList flashcards={flashcards} />
    </div>
  );
};

export default App;
