import React, { useState } from "react";

const StarRating = ({ totalStars }) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className="text-blue-900">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
