import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">list of products</Link>
      </p>
    </div>
  );
}
