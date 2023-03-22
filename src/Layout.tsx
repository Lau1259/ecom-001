import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

const Layout = () => {
  const path = useLocation().pathname;
  return (
    <div className="App">
      <NavBar />
      {path === "/" ? <Home /> : null}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
