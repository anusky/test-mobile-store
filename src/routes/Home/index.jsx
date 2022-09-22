import ProductList from "src/components/ProductList";
import { useProductContext } from "src/context/productContext";

const Home = () => {
  const { list } = useProductContext();
  return (
    <div data-testid="home-page-component" className="container mx-auto px-4">
      <ProductList list={list} />
    </div>
  );
};

export default Home;
