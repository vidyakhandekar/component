import React, { useState } from 'react';
import './RatingSystem.css';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  const handleThumbsUpClick = () => {
    setRating(1);
  };

  const handleThumbsDownClick = () => {
    setRating(-1);
  };

  return (
    <div className="rating-system">
      <p>How would you rate this content?</p>
      <div className="thumbs-container">
        <button className={`thumbs-up ${rating === 1 ? 'selected' : ''}`} onClick={handleThumbsUpClick}>
          👍
        </button>
        <button className={`thumbs-down ${rating === -1 ? 'selected' : ''}`} onClick={handleThumbsDownClick}>
          👎
        </button>
      </div>
      {rating !== 0 && <p>You've rated this {rating === 1 ? 'thumbs up 👍' : 'thumbs down 👎'}!</p>}
    </div>
  );
};

export default RatingSystem;
