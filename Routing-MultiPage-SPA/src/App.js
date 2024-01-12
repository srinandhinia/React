import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

// Below is alternative approach
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/Products" element={<Products />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
