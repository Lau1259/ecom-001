import logo from "../../assets/logo.png";
import { NavContainer, NavListContainer, NavLogo } from "./styles";
import { NavLink } from "react-router-dom";

interface Props {
  //Describe Props
}

const NavBar = ({}) => {
  return (
    <NavContainer>
      <div>
        <NavLink to="/">
          <NavLogo src={logo} alt="Logo" />
        </NavLink>
      </div>
      <NavListContainer>
        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/test-1">Test #1</NavLink>
          </li>
          <li>
            <NavLink to="/test-2">Test #2</NavLink>
          </li>
          <li>
            <NavLink to="/test-3">Test #3</NavLink>
          </li>
        </ul>
      </NavListContainer>
    </NavContainer>
  );
};

export default NavBar;
