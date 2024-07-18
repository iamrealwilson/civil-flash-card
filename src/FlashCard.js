import React from 'react';
import { useSpring, animated } from 'react-spring';
import './FlashCard.css';
import {isMobile} from 'react-device-detect';

const FlashCard = ({ front, back, isFlipped, onFlip }) => {
  const { transform, opacity } = useSpring({
    transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
    opacity: isFlipped ? 1 : 1,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  let fontSize = isMobile ? '60px' : '60px';

  console.log('Font Size: ' + fontSize);

  return (

    <div className="flashcard" onClick={onFlip}>
      <animated.div
        className="content"
        style={{
          transform,
          backfaceVisibility: 'hidden',
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="card front">
          <animated.h2
            style={{
              opacity: 1,
              textAlign: 'center',
              fontSize: {fontSize},
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif', // Example: Custom font
              color: '#333',
              textShadow: '1px 1px 1px rgba(0,0,0,0.2)', // Optional: Adds subtle text shadow
            }}
          >
            {front}
          </animated.h2>
        </div>
        <div className="card back">
          <animated.h2
            style={{
              opacity,
              transform: 'rotateY(360deg)',
              textAlign: 'center',
              fontSize: {fontSize},
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif', // Example: Custom font
              color: '#333',
              textShadow: '1px 1px 1px rgba(0,0,0,0.2)', // Optional: Adds subtle text shadow
            }}
          >
            {back}
          </animated.h2>
        </div>
      </animated.div>
    </div>
  );
};

export default FlashCard;
