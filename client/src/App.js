import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ReactStripeCheckout from "./components/Checkout";
import FinishScreen from "./screens/FinishScreen";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Greet from "./components/ChatBot";
import User from "./components/User";
import Admin from "./components/Admin";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Update from "./components/Update";
import Delete from "./components/Delete";

import Statistics from "./components/Statistics";
import Electronics from "./screens/categories/electronics";
import Fruits from "./screens/categories/fruits";
import HomeCare from "./screens/categories/homeCare";
import Kids from "./screens/categories/kids";
import Men from "./screens/categories/men";
import PackagedFood from "./screens/categories/packagedfood";
import Eggs from "./screens/categories/eggs";
import Beverages from "./screens/categories/beverages";
import SkinCare from "./screens/categories/skinCare";
import ForgotPassword from "./components/forgotPassword";
import View from "./components/View";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [taggle, updateTaggle] = useState(0);
  return (
    <Router>
      
      <Navbar click={() => setSideToggle(true)} />
      {/* <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
      <main className="app">
      <ToastContainer/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Electronics" component={() => <Electronics name={"Electronics"} />} />
          <Route exact path="/Home" component={() => <HomeCare name={"Home Care"} />} />
          <Route exact path="/user" component={User} />
          <Route exact path="/Fruits" component={() => <Fruits name={"Fruits and Vegetables"} />} />
          <Route exact path="/Dairy" component={() => <Fruits name={"Dairy Products"} />} />
          <Route exact path="/Kids" component={() => <Kids name={"Kids"} />} />
          <Route exact path="/Women" component={() => <Kids name={"Women"} />} />
          <Route exact path="/Beverages" component={() => <Beverages name={"Beverages"} />} />
          <Route exact path="/Skin" component={() => <SkinCare name={"Skin Care"} />} />
          <Route exact path="/Men" component={() => <Men name={"Men"} />} />
          <Route exact path="/Packaged" component={() => <PackagedFood name={"Packaged Food"} />} />
          <Route exact path="/Eggs" component={() => <Eggs name={"Eggs Meat and Seafood"} />} />
          <Route exact path="/admin" component={Admin} />
<Route exact path='/forgot' component={ForgotPassword}/>
          <Route path='/login' component={()=><Login togle={updateTaggle}/>}/>
          <Route path='/register' component={Register}/>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={ReactStripeCheckout}/>
          <Route exact path="/back" component={CartScreen}/>
          <Route exact path="/finish" component={FinishScreen}/>
          <Route  exact path='/admin' component={Admin}/>
 <Route path='/admin/productlist' component={ProductList} />
 <Route path='/admin/update' component={Update} />
 <Route path='/admin/delete' component={Delete} />
 <Route path='/admin/view' component={View} />
 <Route path='/admin/statistic' component={Statistics} />
        </Switch>
        <Greet/>
      </main>
    </Router>
  );
}

export default App;
