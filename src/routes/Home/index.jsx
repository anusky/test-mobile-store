import { useProductContext } from "src/context/productContext";

const Home = () => {
  const { list } = useProductContext();
  return (
    <div>
      Home
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </div>
  );
};

export default Home;
