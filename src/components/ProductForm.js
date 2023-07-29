import { useRef } from "react";
import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const productNameRef = useRef();
  const categoryRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const price = priceRef.current.value;
    const productName = productNameRef.current.value;
    const category = categoryRef.current.value;
    const myObj = {
      Myid: id,
      Myprice: price,
      MyproductName: productName,
      Mycategory: category,
    };
    props.onAddProduct(myObj);
    idRef.current.value = "";
    priceRef.current.value = "";
    productNameRef.current.value = "";
    categoryRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="id">Product Id: </label>
        <input type="number" id="id" ref={idRef}></input>
      </div>
      <div>
        <label htmlFor="price">Selling Price: </label>
        <input type="number" id="price" ref={priceRef}></input>
      </div>
      <div>
        <label htmlFor="product">Product Name: </label>
        <input type="text" id="product" ref={productNameRef}></input>
      </div>
      <div>
        <label>Choose a category</label>
        <input list="category" name="category" ref={categoryRef} />
        <datalist id="category">
          <option value={"Electronic items"} />
          <option value={"Skincare items"} />
          <option value={"Food Items"} />
        </datalist>
      </div>
      <div>
        <button>Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
