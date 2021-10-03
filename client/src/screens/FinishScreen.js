import "./HomeScreen.css";
import "./CartScreen.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const FinishScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <div className="homescreen">
      <div className="homescreen__products">
        <h2 className="Finish">Thank you for ordering!!</h2>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p> Order Details</p>
            <p>No of Items: {getCartCount()} items</p>
            <p>Price: Rs.{getCartSubTotal()}</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default FinishScreen;