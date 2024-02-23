import React, { useState } from "react";
import RestaurantCard from "../components/cards/RestaurantCard";
import Button from "../components/buttons/Button";
import RadioButton from "../components/input/RadioButton";
import SelectButton from "../components/input/SelectButton";
import usePatchedData from "../hooks/usePatchedData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(" ");
  const [priceValue, setPriceValue] = useState(" ");
  const [showCount, setShowCount] = useState(10);
  const priceList = [
    { value: "$", name: "<15k" },
    { value: "$$", name: "15k - 30k" },
    { value: "$$$", name: "30k - 50k" },
    { value: "$$$$", name: ">50k" },
  ];
  const categoryList = [
    { value: "Italia", name: "Italia" },
    { value: "Moder", name: "Modern" },
    { value: "Bali", name: "Bali" },
  ];

  const restaurantData = usePatchedData(
    `https://restaurant-api.dicoding.dev/search?q=${filter}`
  );

  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  if (restaurantData.isLoading) {
    return <p>Loading</p>;
  } else if (restaurantData.error) {
    return <p>{restaurantData.error}</p>;
  }

  let filteredData = isOpen
    ? restaurantData.data.filter((item) => item.shopStatus === isOpen)
    : restaurantData.data;

  if (priceValue.trim() !== "") {
    filteredData = filteredData.filter(
      (item) => item.priceRange === priceValue
    );
  }

  const loadMore = () => {
    setShowCount((prevShow) => prevShow + 10);
  };

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
              <RadioButton setStatus={setIsOpen} status={isOpen} />
            </div>
            <div>
              <SelectButton
                title="Price"
                list={priceList}
                setFilter={setPriceValue}
              />
            </div>
            <div>
              <SelectButton
                title="Category"
                list={categoryList}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
          </div>
          <div className="p-[1px] w-full bg-gray-200"></div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-5 gap-8">
          {filteredData.slice(0, showCount).map((item) => (
            <RestaurantCard
              handleDetail={handleDetail}
              data={item}
              key={item.id}
            />
          ))}
        </div>

        {/* Load more button */}
        {showCount < filteredData.length && (
          <div className="w-1/4 mx-auto mt-12">
            <Button variant="outlined" action={loadMore}>
              LOAD MORE
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
