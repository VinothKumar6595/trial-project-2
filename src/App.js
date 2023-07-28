import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [enteredProducts, setEnteredProducts] = useState([]);
  const addProductHandler = (products) => {
    setEnteredProducts((previousState) => {
      return [...previousState, products];
    });
  };
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />
      <ProductList products={enteredProducts} />
    </div>
  );
}

export default App;
