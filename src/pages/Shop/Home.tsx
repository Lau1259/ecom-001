import Category from "../../components/Category/Category";
import { Main } from "../../styles/global";

interface Props {
  //Describe Props
  categories: {
    img: string;
    description: string;
    title: string;
    id: number;
  }[];
}

const Home = ({ categories }: Props) => {
  const CategoryItems = categories.map((c, i) => (
    <Category key={c.id} {...c} isEven={i % 2 == 0} />
  ));
  return <Main>{CategoryItems}</Main>;
};

export default Home;
