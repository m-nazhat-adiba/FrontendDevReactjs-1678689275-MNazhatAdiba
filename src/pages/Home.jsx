import React from "react";
import RestaurantCard from "../components/cards/RestaurantCard";
import Button from "../components/buttons/Button";
import { restaurantDummyData } from "../constants/dummyRestaurant";
import RadioButton from "../components/input/RadioButton";
import SelectButton from "../components/input/SelectButton";

const Home = () => {
  return (
    <div className="container mx-auto w-screen h-full flex flex-col py-8">
      {/* Page Header */}
      <section className="w-1/2 flex flex-col gap-4 mb-6">
        <h1 className="text-4xl text-gray-800 font-normal">Restaurants</h1>
        <p className="text-base text-gray-500 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem maxime velit molestiae incidunt magnam dolor. Neque
          ipsum labore modi animi fuga, perspiciatis, iste consectetur quae
          omnis laborum quas provident iusto!
        </p>
      </section>

      {/* restaurant list */}
      <section className="flex flex-col w-full">
        {/* Filter tabs */}
        <div className="w-full flex flex-col gap-4">
          <div className="p-[1px] w-full bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <p>Filter by:</p>
            {/* place button here */}
            <div>
              <RadioButton />
            </div>
            <div>
              <SelectButton />
            </div>
            <div>
              <SelectButton />
            </div>
          </div>
          <div className="p-[1px] w-full bg-gray-200"></div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-5 gap-8">
          {restaurantDummyData.map((item) => (
            <RestaurantCard data={item} key={item.id} />
          ))}
        </div>

        {/* Load more button */}
        <div className="w-1/4 mx-auto mt-12">
          <Button variant="outlined">LOAD MORE</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
