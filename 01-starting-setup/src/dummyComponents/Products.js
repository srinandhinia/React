import "./Products.css";
function Product(props) {
  return (
    <div className="product-item">
      <div>{props.title}</div>
      <div className="product-item__price">${props.price}</div>
      <div className="product-item__description">{props.desc}</div>
    </div>
  );
}

export default Product;
