import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.jpg";

interface Props {
  //Describe Props
}

const NavBar = ({}) => {
  return (
    <div className={`${styles["navbar"]}`}>
      <div className={`${styles["icon"]}`}>
        <img src={logo} alt="test logo" />
      </div>
      <nav className="nav-main">
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
