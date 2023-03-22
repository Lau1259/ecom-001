//import {} from './styles';
import { useParams } from "react-router-dom";

interface Props {
  //Describe Props
}

const Product = ({}) => {
  const params = useParams();
  return <h1>You are viewing product #{params.id}</h1>;
};

export default Product;
