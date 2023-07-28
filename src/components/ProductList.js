const ProductList = (props) => {
  return (
    <div>
      <ul>
        {props.products.map((product) => (
          <li
            key={product.Myid}
          >{`Selling Price is $${product.Myprice} for ${product.MyproductName} , and it falls under the category of ${product.Mycategory}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
