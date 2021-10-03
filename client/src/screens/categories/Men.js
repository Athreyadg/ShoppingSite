// import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


// Components
import Product from "../../components/Product";

//Actions
import { getProductsByCategory as listProducts } from "../../redux/actions/productActions";

const Men = (props) => {
  const dispatch = useDispatch();

  const getProductsByCategory = useSelector((state) => state.getProductsByCategory);
  const { products, loading, error } = getProductsByCategory;

  useEffect(() => {
    dispatch(listProducts(props.name));
  }, [dispatch]);

  return (
    <div class="container-fluid">
    <div className="homescreen row">
    <p>{loading}</p>
      <div>

              {/* <h3> Select Category </h3> */}
              <br/>
              <h6>
              
              <ul class="navbar">
                <Link to={`/fruits `} class="btn btn-success btn-outline-light" style={{'padding':'3px','marginRight':'2px'}}>Fruits and Vegetables</Link>
                  <Link to={`/dairy `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Dairy Products</Link> 
                  <Link to={`/beverages `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Beverages</Link>
                  <Link to={`/eggs `} class="btn btn-success btn-outline-light" style={{'padding':'3px','marginRight':'2px'}}>Eggs,Meat and Seafood</Link>
                  <Link to={`/home `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Home Care</Link>
                </ul>
                <ul class='navbar'> 
                
                  <Link to={`/skin `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Skin Care</Link>
                  <Link to={`/electronics `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Electronics</Link>
                  <Link to={`/kids `} class="btn btn-success btn-outline-light" style={{'marginRight':'2px'}}>Kids</Link>
                  <Link to={`/women `} class="btn btn-success btn-outline-light" style={{'marginRight':'1px'}}>Women</Link>
                  <Link to={`/men `} class="btn btn-success btn-outline-light" style={{'marginLeft':'1px'}}>Men</Link>
                  <Link to={`/packaged `} class="btn btn-success btn-outline-light" style={{'marginLeft':'1px'}}>Packaged food</Link>
                </ul>
              </h6>
            </div> 

      <h2 className="homescreen__title text-center">{props.name}</h2>
      
      <div className="homescreen__products">
                

        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (

            
            <div class=''>
              <div class="">

              

              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Men;










// import React, { useState } from "react"; import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "../../components/Product";

// import { Link } from "react-router-dom";

// function Electronics(props){
//     const [products, getItems] = useState([{
//         name: String,
//         category: String,
//         description: String,
//         price: Number,
//         CountInStock: Number,
//         imageUrl: String,
//     }])

//     useEffect(() => {
//         fetch("/categories").then(res => {

//             if(res.ok){
//                 return res.json()
//             }
//         }).then((jsonres) => getItems(jsonres) )
//     })

//     return(
//         <div>
//             {products.map(product => 
            
//                 <div className="card">
//                     <div className="card-body">
                         
//                     <Product
//                         key={product._id}
//                         name={product.name}
//                         description={product.description}
//                         price={product.price}
//                         imageUrl={product.imageUrl}
//                         productId={product._id}
//                     />

//                     </div>
//                 </div>

//             )}
//         </div>
//     )
// }

// export default Electronics


// // import { getProductsByCategory } from "../../../../backend/controller/productControllers";

// import Product from "../../components/Product";




//     // dispatch = useDispatch();

//     // const getProductsByCategory = useSelector((state) => state.getProductsByCategory);
//     // const { products, loading, error } = getProductsByCategory;

//     // useEffect(() => {
//     //     dispatch(listProducts());
//     // }, [dispatch])



//     class Electronics extends React.Component {

//         getProductsByCategory = async (req,res) =>{

//             const products = await Product.find({ category: this.props.name });
//             return products
//         }
        
//         //    console.log(res.json(products))
//         // res.json(products)
//         // alert(res.json(products))

//         //     const listItems = products.map((product) =>
//         //         <div>
//         //               <Product
//         //                 key={product._id}
//         //                 name={product.name}
//         //                 description={product.description}
//         //                 price={product.price}
//         //                 imageUrl={product.imageUrl}
//         //                 productId={product._id}
//         //               />
//         //            </div>
//         //       );
//         //       return listItems
        
//         // return products;
    

//     // getProductsByCategory

//     // items = 


//     render(){


//         return (
//             <div>
                
//                 {this.getProductsByCategory().map((product) => (
    
    
//                     <div class='card'>
//                         <div class="card-body">
    
    
    
//                             <Product
//                                 key={product._id}
//                                 name={product.name}
//                                 description={product.description}
//                                 price={product.price}
//                                 imageUrl={product.imageUrl}
//                                 productId={product._id}
//                             />
//                         </div>
//                     </div>
//                 ))
//                 }</div>
//         )
//     }

// };

// export default Electronics

