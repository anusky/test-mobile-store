import { useState } from "react";
import ProductList from "src/components/ProductList";
import SearchBar from "src/components/SearchBar";
import { useProductContext } from "src/context/productContext";

const Home = () => {
  const { list } = useProductContext();
  const [currentList, setCurrentList] = useState(list);

  const handleOnUpdateProductList = (filteredProductList) => {
    setCurrentList(filteredProductList);
  };
  return (
    <div data-testid="home-page-component" className="container mx-auto px-4">
      <SearchBar
        initialProductList={list}
        handleOnUpdateProductList={handleOnUpdateProductList}
      />
      <ProductList list={currentList} />
    </div>
  );
};

export default Home;
