import Header from "./Components/Header";
import Meals from "./Components/Meals";
import CartModal from "./Components/CartModal";
import CartContextProvider from "./store/Food-App-Context";
import UserProgressContextProvider from "./store/UserProgress";
import CheckoutFormModal from "./Components/CheckoutFormModal";
import OrderStatusModal from "./Components/OrderStatusModal";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <CartModal />
        <CheckoutFormModal />
        <OrderStatusModal />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
