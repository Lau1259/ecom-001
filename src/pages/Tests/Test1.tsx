import { CardContainer } from "./styles";
import Logo from "../../assets/logo.png";
import ProductCard from "../../components/ProductCard/ProductCard";

interface Props {
  //Describe Props
}

const Test1 = ({}) => {
  return (
    <div>
      <h1>Card Tests</h1>
      <CardContainer>
        <ProductCard
          img={Logo}
          price={99.1}
          title={"Test Item #1"}
          key={67841902381}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.2}
          title={"Test Item #2"}
          key={67841902382}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.3}
          title={"Test Item #3"}
          key={67841902383}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.4}
          title={"Test Item #4"}
          key={67841902384}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.5}
          title={"Test Item #5"}
          key={67841902385}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.6}
          title={"Test Item #6"}
          key={67841902386}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.7}
          title={"Test Item #7"}
          key={67841902387}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.8}
          title={"Test Item #8"}
          key={67841902388}
        ></ProductCard>
        <ProductCard
          img={Logo}
          price={99.9}
          title={"Test Item #9"}
          key={67841902389}
        ></ProductCard>
      </CardContainer>
    </div>
  );
};

export default Test1;
