import "./CartScreen.css";
import "../components/checkout.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
//import { withRouter } from "react-router";
//import CartItem from "../components/CartItem";

// Components
import Product from "../components/Product";
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import ReactStripeCheckout from "../components/Checkout";
//const [isCheckout,setCheckout]=useState(false);
const CartScreen = () => {
  //const [age,setAge]=useState(false)
  //const [cartt,setcart]=useState(true)
//const lightOn=()=>{setAge(!age);setcart(!cartt);}
  //const setCount= useState(false);
 // onst [filter, setFilter] = useState({ name: "Hungary" });
  //const lightOn=()=>setCount("True");
  const dispatch = useDispatch();
  const history=useHistory()
   //let isCheckout=false;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  //
 // var r=0;
  // Declare a new state variable, which we'll call "count"

 /* const checkoutHandler=()=>{
    //r=1;
      //e.preventDefault();
     useState({isCheckout:true});
    }*/

  return (
   
    <>
    
      <div className="cartscreen">

        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Rs.{getCartSubTotal()}</p>
          </div>
          <div>
          <Link to={`/checkout`} className="btn back-btn">Proceed To Checkout</Link>
           {/* {setCount==='1'&&<ReactStripeCheckout/>}*/}
                      </div>
        </div>

      </div>
      
      

    
    </>
    
  );
            
            
};

export default CartScreen;