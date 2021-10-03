import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAdmin from './NavBarAdmin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Update=() =>{
const history=useHistory()
    const [addProduct,setProduct] = useState(
        {
           
            product_name:"",
            category:"",
            Price:"",
            Stock:"",
            Discription:""
        }
    );

    const [records,setRecords]=useState([]);

    const handleInput =(e)=>{
        const name =e.target.name;
        const value=e.target.value;
        console.log(name,value);

        setProduct({...addProduct,[name]:value})
    }

   
        const handleSubmit =async(e) =>{
            e.preventDefault();
    // console.log('Hello')
            const newRecord ={...addProduct, id:new Date().getTime().toString()}
    
            setRecords([...records, newRecord]);
    
            setProduct({product_name:"",category:"",Price:"",Stock:"",Discription:""});
    
            const updateProduct={
               
                product_name:addProduct.product_name,
                category:addProduct.category,
                // product_Brand_Name:addProduct.product_Brand_Name,
                Price:addProduct.Price,
                Stock:addProduct.Stock,
                Discription:addProduct.Discription
            }
           await axios.patch('/api/products',updateProduct)
           .then(()=>{
               toast.success('Product updated succesfully in db!')
               history.push('/admin')
           })
           .catch(()=>toast.error('Failed to update product!'))
        }
    
    // const del=()=>
    // {
    //     alert("Product Updated");
    // }
    return(
    <div>
        <NavBarAdmin/>
    <br/>
    <div className="container">
    
    <h2 >Update Product</h2>
    <form action="" onSubmit={handleSubmit}>
        {/* <div >
            <label className="label" htmlFor="Image">Update Image</label>
            <br/>
            <input className="input1" type="file"  value={addProduct.Image}
               onChange={handleInput} name="Image" id="Image"></input>
        </div> */}
        <div >
            <label className="label" htmlFor="product_name">Product Name to be searched:</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_name}
             onChange={handleInput} name="product_name" id="product_name"></input>
        </div>
        <div >
            <label className="label" htmlFor="category">Update Category:</label>
            <br/>
            <input className="input1" type="text" value={addProduct.category}
             onChange={handleInput} name="category" id="category"></input>
        </div>
        <div >
            <label className="label" htmlFor="Price">Update Price:</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Price} 
            onChange={handleInput} name="Price" id="Price"></input>
        </div>
        <div >
            <label className="label" htmlFor="Stock"> Update Stock:</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Stock} 
            onChange={handleInput} name="Stock" id="Stock"></input>
        </div>
        <div >
            <label className="label" htmlFor="Discription">Description:</label>
            <br/>
            <input className="dis" type="text" value={addProduct.Discription} 
            onChange={handleInput} name="Discription" id="Discription"></input>
        </div>
        <br/>
    <button className="btn btn-success" type="submit">Update Product</button>
    </form>
</div>

    <div className="row">
        {
            records.map( (curElem)=>{
                return(
                    <div className="col">
                    <p> <img src ={curElem.Image}></img></p>
                    <p> {curElem.product_name}</p>
                    <p> {curElem.product_Brand_Name}</p>
                    <p> {curElem.Price}</p>
                    <p> {curElem.Stock}</p>
                    <p> {curElem.Discription}</p>
                    </div>
                )
            }

            )
        }
    </div>
    </div>
    );
};
export default Update;