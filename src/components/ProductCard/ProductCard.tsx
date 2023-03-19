import { ProductCardContainer } from "./styles";
import Logo from "../../assets/logo.png";

interface Props {
  //Describe Props
  img: string;
  title: string;
  price: number;
}

const ProductCard = ({ img, title, price }: Props) => {
  return (
    <ProductCardContainer>
      <img src={Logo} alt="Test image" />
      <p>{title.toLocaleUpperCase()}</p>
      <p>${price}</p>
    </ProductCardContainer>
  );
};

export default ProductCard;
