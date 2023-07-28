import React, { useEffect, useState } from "react";
import "./star-rating.css";

function StarRating({ numberOfStars = 5, onChange }) {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

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
            &#9733;
          </p>
        );
      })}
    </div>
  );
}
export default StarRating;
