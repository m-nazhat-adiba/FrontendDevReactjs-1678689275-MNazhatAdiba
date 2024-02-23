import React from "react";
import useGetData from "../hooks/useGetData";
import { useNavigate, useParams } from "react-router";
import ReviewCard from "../components/cards/ReviewCardElem";
import Button from "../components/buttons/Button";

const DetailRestaurant = () => {
  const param = useParams();
  const navigate = useNavigate();
  const restaurantDetail = useGetData(
    `https://restaurant-api.dicoding.dev/detail/${param.id}`
  );

  if (restaurantDetail.isLoading) {
    return <p>Loading</p>;
  } else if (restaurantDetail.error) {
    return <p>{restaurantDetail.error}</p>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-6 flex flex-col gap-10">
      <section>
        <div className="w-fit mb-6">
          <Button action={handleBack} variant="outlined">
            Back
          </Button>
        </div>
        <div className="w-full h-80">
          <img
            src={`https://restaurant-api.dicoding.dev/images/small/${restaurantDetail.data.restaurant.pictureId}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl mt-8">
          {restaurantDetail.data.restaurant.name}{" "}
          {restaurantDetail.data.restaurant.rating}
        </h1>
        <p className="text-base mt-2">
          {restaurantDetail.data.restaurant.description}
        </p>
      </section>

      <section className="grid grid-cols-4 gap-6">
        {restaurantDetail.data.restaurant.customerReviews.map((item, key) => (
          <ReviewCard data={item} key={key} />
        ))}
      </section>
    </div>
  );
};

export default DetailRestaurant;
