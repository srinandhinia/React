import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "P1", title: "Product 1" },
  { id: "P2", title: "Product 2" },
  { id: "P3", title: "Product 3" },
];
export default function Products() {
  return (
    <>
      <p>Products Page</p>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
