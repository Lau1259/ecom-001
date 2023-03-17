import logo from "../../assets/logo.jpg";
import { NavContainer, NavListContainer, NavLogo } from "./styles";

interface Props {
  //Describe Props
}

const NavBar = ({}) => {
  return (
    <NavContainer>
      <div>
        <NavLogo src={logo} alt="test logo" />
      </div>
      <NavListContainer>
        <ul>
          <li>
            <a href="#">Test #1</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
        </ul>
      </NavListContainer>
    </NavContainer>
  );
};

export default NavBar;
