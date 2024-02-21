import DetailRestaurant from "../pages/DetailRestaurant";
import Home from "../pages/Home";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/detail/:restaurantName", element: <DetailRestaurant /> },
];
