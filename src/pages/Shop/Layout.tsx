//import {} from './styles';
import { Route, Routes } from "react-router-dom";
import ShopRoutes from "./routes";
import Logo from "../../assets/logo.jpg";
import Home from "./Home";
import Product from "./Product";

interface Props {
  //Describe Props
}

const Layout = ({}) => {
  return (
    <div>
      <h1>SHOP</h1>
      {ShopRoutes}
    </div>
  );
};

export default Layout;
