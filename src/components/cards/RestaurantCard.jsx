import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import useGetData from "../../hooks/useGetData";
import StarRating from "../common/StarRating";

const RestaurantCard = ({ data, handleDetail }) => {
  const additionalData = useGetData(
    `https://restaurant-api.dicoding.dev/detail/${data.id}`
  );

  if (additionalData.isLoading) {
    return <p>Loading</p>;
  } else if (additionalData.error) {
    return <p>{additionalData.error}</p>;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      {/* image */}
      <div className="w-full h-40">
        <img
          src={`https://restaurant-api.dicoding.dev/images/small/${additionalData.data.restaurant.pictureId}`}
          alt="restaurant image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* details */}
      <section>
        <h2 className="font-semibold">{data.name}</h2>
        {/* place star rating */}
        <StarRating totalStars={Math.floor(data.rating)} />
        <div className="flex justify-between w-full text-sm text-gray-600">
          <p>{`${additionalData.data.restaurant.categories[0].name.toUpperCase()} ${
            data.priceRange
          }`}</p>
          {data.shopStatus ? (
            <p>
              <span className="text-green-500">●</span> OPEN NOW
            </p>
          ) : (
            <p>
              <span className="text-red-500 ">●</span>
              <span> CLOSED</span>
            </p>
          )}
        </div>
      </section>
      {/* CTA */}
      <div>
        <Button action={() => handleDetail(data.id)}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default RestaurantCard;
