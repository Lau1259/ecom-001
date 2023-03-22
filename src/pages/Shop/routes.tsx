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
              id: 1,
              title: "T-shirts",
              description:
                "Casual and comfortable shirts made from soft fabric.",
              img: "https://source.unsplash.com/featured/?t-shirts",
            },
            {
              id: 2,
              title: "Jeans",
              description: "Versatile and durable pants made from denim.",
              img: "https://source.unsplash.com/featured/?jeans",
            },
            {
              id: 3,
              title: "Dresses",
              description:
                "Stylish and comfortable dresses made from high-quality fabric.",
              img: "https://source.unsplash.com/featured/?dresses",
            },
            {
              id: 4,
              title: "Jackets",
              description:
                "Warm and fashionable outerwear made from high-quality materials.",
              img: "https://source.unsplash.com/featured/?jackets",
            },
            {
              id: 5,
              title: "Sweaters",
              description:
                "Cozy and comfortable knitwear made from soft wool or synthetic fibers.",
              img: "https://source.unsplash.com/featured/?sweaters",
            },
          ]}
        />
      }
    />
    <Route path="/:id" element={<Product />} />
  </Routes>
);
export default ShopRoutes;
