import logo from "../../assets/logo.jpg";

interface Props {
  //Describe Props
}

const NavBar = ({}) => {
  return (
    <div>
      <div>
        <img src={logo} alt="test logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
          <li>
            <a href="#">Test</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
