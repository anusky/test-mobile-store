import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductContextProvider } from "./context/productContext";
import Home from "./routes/Home";
import Product from "./routes/Product";
import { getAlProducts } from "./utils/productManagement";

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const currentProductList = await getAlProducts();
      setProductList(currentProductList);
    };

    getProducts();
  }, []);
  return (
    <BrowserRouter>
      <ProductContextProvider value={{ list: productList }}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<Product />} />
          </Routes>
        </div>
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
