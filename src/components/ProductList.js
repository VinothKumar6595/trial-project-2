const ProductList = (props) => {
  const electronics = props.products.filter((product) => {
    return product.Mycategory === "Electronic items";
  });

  const skincare = props.products.filter((product) => {
    return product.Mycategory === "Skincare items";
  });

  const food = props.products.filter((product) => {
    return product.Mycategory === "Food Items";
  });
  return (
    <div>
      <ul>
        <h2>Electronic Items</h2>
        {electronics.map((product) => (
          <li
            key={product.Myid}
          >{`Selling Price is $${product.Myprice} for ${product.MyproductName} , and it falls under the category of ${product.Mycategory}`}</li>
        ))}
      </ul>
      <ul>
        <h2>Skincare Items</h2>
        {skincare.map((product) => (
          <li
            key={product.Myid}
          >{`Selling Price is $${product.Myprice} for ${product.MyproductName} , and it falls under the category of ${product.Mycategory}`}</li>
        ))}
      </ul>
      <ul>
        <h2>Food Items</h2>
        {food.map((product) => (
          <li
            key={product.Myid}
          >{`Selling Price is $${product.Myprice} for ${product.MyproductName} , and it falls under the category of ${product.Mycategory}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
