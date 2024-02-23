import axios from "axios";
import { useEffect, useState } from "react";

function usePatchedData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const shopStatus = [];
  const priceRange = [];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);

        const dataLength = response.data.restaurants.length;

        for (let i = 0; i < dataLength; i++) {
          const randValue1 = Math.floor(Math.random() * 2);
          const status = randValue1 === 1 ? true : false;
          shopStatus.push(status);

          const randValue2 = Math.floor(Math.random() * 5);
          const range = "$".repeat(randValue2);
          priceRange.push(range);
        }

        const modifiedData = response.data.restaurants.map((item, key) => ({
          ...item,
          shopStatus: shopStatus[key] || 0,
          priceRange: priceRange[key] || "$",
        }));

        setData(modifiedData);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default usePatchedData;
