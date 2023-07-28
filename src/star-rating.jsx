import React, { useState } from "react";
import "./star-rating.css";

function StarRating({ numberOfStars = 5 }) {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="star-rating-container">
      {[...Array(numberOfStars)].map((_, idx) => {
        const ratingValue = idx + 1;
        return (
          <p
            key={idx}
            className={`star ${
              ratingValue <= (hoverRating || currentRating) ? "active" : ""
            }`}
            onClick={() =>
              setCurrentRating(ratingValue === currentRating ? 0 : ratingValue)
            }
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
}
export default StarRating;
