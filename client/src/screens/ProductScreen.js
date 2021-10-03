import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { Link, useHistory } from "react-router-dom";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
const history1=useHistory()
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    if(localStorage.getItem('token')!=null){
      dispatch(addToCart(product._id, qty));
      history1.push('/cart')
   
    }
    else{
    history1.push(`/login`);
    }
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div class='container'>
          <div class="row">
            <div class="col">
              <div className="productscreen__left">
                <div className="left__image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left__info">
                  <p className="left__name">{product.name}</p>
                  <p>Price: Rs.{product.price}</p>
                  <p>Description: {product.description}</p>
                </div>
              </div>
              <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
               
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
