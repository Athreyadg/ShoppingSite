import './checkout.css';
import { Link,useHistory,Redirect} from 'react-router-dom';
const ReactStripeCheckout = () => {
  const history=useHistory();

  const finishhandler=()=>{
    // <Link to={`/finish`} class="btn back-btn">Check your Order Status</Link>
    history.push('/finish')
  }
  
  return (
    <form onSubmit={finishhandler}>
    <div class="checkout-panel">
    <div class="panel-body">
      <h2 class="title">Checkout</h2>
   
     {/* <div class="progress-bar">
        <div class="step active"></div>
        <div class="step active"></div>
        <div class="step"></div>
        <div class="step"></div>
  </div>*/}
   
            <div>
              <label class="input-fields label" for="address" color="blue">Address For Delivery</label>
              <input type="text" id="address" autoComplete="off" required />
            </div>
            <br/><br/>

            <div>
              <label class="input-fields label" for="address" color="blue">Email Address</label>
              <input type="email" id="address" autoComplete="off" required />
            </div>
            <br/><br/> 
             <div>
              <label class="input-fields label" for="address" color="blue">Contact No</label>
              <input type="tel" pattern="[0-9]{10}" id="address" autoComplete="off" required />
            </div>
            <br/><br/>
          
    </div>
   
    <div class="panel-footer">
    {/* <Link to={`/back`} className="btn back-btn">Back</Link>*/}
     <button className="btn next-btn">Submit</button>
    </div>
    {/* <div className="finish">
      <Link to={`/finish`} class="btn back-btn">Check your Order Status</Link>
      </div> */}
  </div>
  </form>
  )
};
export default ReactStripeCheckout;