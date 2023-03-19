import { ProductCardContainer, ProductInfo } from "./styles";

interface Props {
  //Describe Props
  img: string;
  title: string;
  price: number;
}

const ProductCard = ({ img, title, price }: Props) => {
  return (
    <ProductCardContainer>
      <img src={img} alt="Test image" />
      <ProductInfo>
        <p>{title.toLocaleUpperCase()}</p>
        <p>${price}</p>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
