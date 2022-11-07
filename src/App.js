import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [order, setOrder] = useState(false);
  const orderHandler = () => {
    setOrder(true)
  }
  const hideOrderHandler = () => {
    setOrder(false)
  }
  return (
    <CartProvider>
      {order && <Cart onHideOrders={hideOrderHandler} />}
      <Header onSeeOrders={orderHandler} />
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
