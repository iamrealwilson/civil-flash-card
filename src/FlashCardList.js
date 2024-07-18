import React, { useState } from 'react';
import FlashCard from './FlashCard';
import './FlashCardList.css';

const FlashCardList = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="container">
      <div className="flashcard-list">
        <div className="arrow left" onClick={prevCard}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <FlashCard
          front={flashcards[currentIndex].question}
          back={flashcards[currentIndex].answer}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
        <div className="arrow right" onClick={nextCard}>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default FlashCardList;
