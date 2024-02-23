import React from "react";

const StarRating = ({ totalStars }) => {
  const filledStars = Math.floor(totalStars);
  const outlinedStars = Math.floor(5 - totalStars);

  return (
    <div>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="text-blue-900 text-lg">
          ★
        </span>
      ))}

      {[...Array(outlinedStars)].map((_, index) => (
        <span key={index} className="text-gray-400 text-lg">
          ☆
        </span>
      ))}
    </div>
  );
};

export default StarRating;
