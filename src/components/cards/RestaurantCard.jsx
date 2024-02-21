import React from "react";
import Button from "../buttons/Button";

const RestaurantCard = ({ data }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* image */}
      <div className="w-full h-40">
        <img src={data.imageUrl} alt="restaurant image" />
      </div>
      {/* details */}
      <section>
        <h2 className="font-semibold">{data.name + " " + data.id}</h2>
        {/* place star rating */}
        <p>{data.rating}</p>
        <div className="flex justify-between w-full">
          <p>{`${data.type} ${data.priceRange}`}</p>
          <p>{data.status === "open" ? "Open Now" : "Closed"}</p>
        </div>
      </section>
      {/* CTA */}
      <div>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default RestaurantCard;
