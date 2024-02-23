import React from "react";
import StarRating from "../common/StarRating";

const ReviewCard = ({ data }) => {
  const randomRating = Math.floor(Math.random() * 2);
  return (
    <div className="flex w-full gap-4 border-2 border-gray-200 p-2">
      {/* image */}
      <div className="w-10">
        <img
          src={"/avatar.svg"}
          alt="restaurant image"
          className="w-full h-auto"
        />
      </div>
      {/* details */}
      <section className="w-full">
        <h2 className="font-semibold">{data.name}</h2>
        {/* place star rating */}
        <StarRating totalStars={randomRating + 4} />
        <p>{data.review}</p>
      </section>
    </div>
  );
};

export default ReviewCard;
