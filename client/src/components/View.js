import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import Product from "../components/Product";

import { getProducts as listProducts } from "../redux/actions/productActions";
import NavBarAdmin from './NavBarAdmin';
const View=() =>{
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.getProducts);
    const {  products,loading, error } = productDetails;
    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]);
    // const [product,setProduct]= useState([{
    //     Image:'',
    //         Category:'',
    //         product_name:'',
    //         product_Brand_Name:'',
    //         Price:'',
    //         Stock:'',
    //         Discription:''
    // }])

    // useEffect(()=>{
    //     fetch("/view").then(res=>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonRes=>setProduct(jsonRes));
    // })

    return(
        <>
        <NavBarAdmin/>
         <div className='container'>
            <h1>Products</h1>
            
            <div>
            {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          
          
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
            </div>
        </div>
        </>
    )

};
export default View;