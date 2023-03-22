import { CategoryContainer } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

interface Props {
  //Describe Props
  img: string;
  description: string;
  title: string;
  id: string;
  isEven: boolean;
}

const Category = ({ img = Logo, description, title, id, isEven }: Props) => {
  return (
    <CategoryContainer bg={Logo} className={`${isEven ? "left" : "right"}`}>
      <div className="img"> </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Link className="cta" to={`./${id}`}>
          See {`${title} >`}
        </Link>
      </div>
    </CategoryContainer>
  );
};

export default Category;
