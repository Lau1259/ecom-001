import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Logo from "../../assets/logo.jpg";

const ShopRoutes = (
  <Routes>
    <Route
      path="/"
      element={
        <Home
          categories={[
            {
              img: Logo,
              description:
                "Shoes are the ultimate addition to your look. Without stealing the show, this pair can give you the presence you need.",
              id: "shoes",
              title: "Shoes",
            },
            {
              img: Logo,
              description:
                "From comfort to warmth, what you wear in bed is essential for improving your quality of sleep. ",
              id: "Sleepwear",
              title: "Sleepwear",
            },
            {
              img: Logo,
              description:
                "From comfort to warmth, what you wear in bed is essential for improving your quality of sleep. ",
              id: "Sleepwear",
              title: "Sleepwear",
            },
          ]}
        />
      }
    />
    <Route path="/:id" element={<Product />} />
  </Routes>
);
export default ShopRoutes;
