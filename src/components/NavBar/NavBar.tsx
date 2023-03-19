import logo from "../../assets/logo.png";
import { NavContainer, NavListContainer, NavLogo } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  //Describe Props
}

const NavBar = ({}) => {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <NavLogo src={logo} alt="Logo" />
        </Link>
      </div>
      <NavListContainer>
        <ul>
          <li>
            <Link to="/test-1">Test #1</Link>
          </li>
          <li>
            <Link to="/test-2">Test #2</Link>
          </li>
          <li>
            <Link to="/test-3">Test #3</Link>
          </li>
        </ul>
      </NavListContainer>
    </NavContainer>
  );
};

export default NavBar;
