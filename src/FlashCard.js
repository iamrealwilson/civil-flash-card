import React from 'react';
import './FlashCard.css';

const FlashCard = ({ question, answer }) => (
  <div className="flashcard">
    <h2>{question}</h2>
    <p>{answer}</p>
  </div>
);

export default FlashCard;
