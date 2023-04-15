import React, { memo } from 'react';

const CardComponent = memo(({ cnt, cardKey, onSwipe, onCardLeftScreen, children, TinderCardComponent }) => {
  if (cnt <= 0) {
    return (
      <div className="absolute z-30 ml-8 mt-24">
        <TinderCardComponent className="swipe" key={cardKey} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen}>
          <div className="card">
            {children}
          </div>
        </TinderCardComponent>
      </div>
    );
  }
  return null;
});

export default CardComponent;