
import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import Table from 'react-bootstrap/Table'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import Product from './Product';
// import Item from '../../../backend/models/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from "../redux/actions/productActions";
import { toast } from 'react-toastify';
import NavBarAdmin from './NavBarAdmin';
const Delete=() =>{
    const dispatch = useDispatch();
    const history=useHistory()
    const productDetails = useSelector((state) => state.getProducts);
    const {  products,loading, error } = productDetails;
    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]);
    // const [products,setProducts]= useState([{
    //         // Image:'',
    //         _id:'',
    //         Category:'',
    //         product_name:'',
    //         product_Brand_Name:'',
    // }])

    // useEffect(()=>{
    //     fetch("/").then(res=>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonRes => setProducts(jsonRes));
    // })

   const deleteProduct=async(_id)=>{
    console.log(_id)
    await axios.delete(`/api/products/${_id}`)
    .then(()=>{
      toast.success('Product Deleted Succesfully!!')
      history.push('/admin')
    })
    .catch(()=>toast.error('Failed to delete product!!'))
    
    
   }


//    const loadProduct=async()=>{
//        const res=await axios.get(`http://localhost:3001/delete`)
//        setProducts(res.data);

//    }
   
  
    return(
      
    <div className='container'>
      <NavBarAdmin/>
            <table className='table table-bordered table-hover table-striped sm'>
            <thead>
                  <tr>
                    
                    <th>Category</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
            {products.map(pro =>
             
                <tbody>
                <tr>
                
                <td>{pro.category}</td>
               
                <td>{pro.name}</td>
                
                <td>{pro.price}</td>
                {/* <td>{pro._id}</td> */}
                <td><button className="btn btn-danger my-2" onClick={()=>deleteProduct(pro._id)}>Delete</button></td>
                </tr>
                  </tbody>
              
            
                
            )}
            </table>
            
        </div>
    
    )
}
export default Delete;


//************************************************************************************************* */
// import React, { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// const Delete=() =>{

    
//     const [addProduct,setProduct] = useState(
//         {
//             Category:"",
//             product_name:"",
//             product_Brand_Name:"",
//         }
//     );

//     const [records,setRecords]=useState([]);

//     const handleInput =(e)=>{
//         const name =e.target.name;
//         const value=e.target.value;
//         console.log(name,value);

//         setProduct({...addProduct,[name]:value})
//     }

//     const handleSubmit =(e) =>{
//         e.preventDefault();

//         const newRecord ={...addProduct, id:new Date().getTime().toString()}

//         setRecords([...records, newRecord]);

//         setProduct({Category:"", product_name:"",product_Brand_Name:""});
//     }
//     const update=()=>
//     {
//         alert("Product Deleted");
//     }
//     return(
//     <>
//     <br/>
//     <div className="container">
    
//     <h2 className="text-danger">Delete Product</h2>
//     <form action="" onSubmit={handleSubmit}>
//         <div >
//             <label className="label" htmlFor="Category">Category</label>
//             <br/>
//             <input className="input1" type="text" value={addProduct.Category}
//              onChange={handleInput} name="Category" id="Category" required></input>
//         </div>
//         <div >
//             <label className="label" htmlFor="product_name">Product Name</label>
//             <br/>
//             <input className="input1" type="text" value={addProduct.product_name}
//              onChange={handleInput} name="product_name" id="product_name" required></input>
//         </div>
//         <div >
//             <label className="label" htmlFor="product_Brand_Name">Product Brand Name</label>
//             <br/>
//             <input className="input1" type="text" value={addProduct.product_Brand_Name}
//              onChange={handleInput} name="product_Brand_Name" id="product_Brand_Name" required></input>
//         </div>
//         <br/>
//     <button className="btn btn-success" type="submit" onClick={()=>{update()}}>Delete</button>
//     </form>
// </div>

//     <div className="row">
//         {
//             records.map( (curElem)=>{
//                 return(
//                     <div className="col">
//                     <p> {curElem.Category}</p>
//                     <p> {curElem.product_name}</p>
//                     <p> {curElem.product_Brand_Name}</p>
//                     </div>
//                 )
//             }

//             )
//         }
//     </div>
//     </>
//     );
// };
// export default Delete;