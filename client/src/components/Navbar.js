import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import app, { auth } from '../firebase';
import firebase from 'firebase';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [taggle, updateTaggle] = useState(0);
  const history=useHistory()
function handleLogout(){
  auth
.signOut()
.then(() => {
    localStorage.removeItem('token');
    updateTaggle(1);
    history.push('/');
});
}

useEffect(()=>{

},[taggle]);
  const { cartItems } = cart;

  const getCartCount = () => {
   
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    
  };

  return (
    <div id='idp' style={{'width':'100%'}}>
    <nav className="navbar">
      {
        localStorage.getItem('token')!=null?
        <>
      <div className="navbar__logo">
        <h2>Shopping Application</h2>
      </div>
      <ul className="navbar__links">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/user'>User Profile</Link>
        </li>
        <li>
        <button style={{'background':'#333','padding':'10px','border-radius':'8px','color':'#f4f4f4'}} id='id8' onClick={handleLogout}>Logout</button>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      
        </ul>
</>:
<>
<div className="navbar__logo">
        <h2>Shopping Application</h2>
      </div>
      <ul className="navbar__links">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
       
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </>
}
    </nav>
    </div>
  );
};

export default Navbar;