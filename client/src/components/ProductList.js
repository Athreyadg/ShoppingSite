import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAdmin from './NavBarAdmin';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const ProductList=() =>{
const history=useHistory()
    const [addProduct,setProduct] = useState(
        {
            Image:"",
            Category:"",
            product_name:"",
            // product_Brand_Name:"",
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


        /*const addNewproduct={
            Image:addProduct.Image,
            Category:addProduct.Category,
            product_name:addProduct.product_name,
            product_Brand_Name:addProduct.product_Brand_Name,
            Price:addProduct.Price,
            Stock:addProduct.Stock,
            Discription:addProduct.Discription
        }
        axios.post('http://localhost:3001/product',addNewproduct)*/

        setProduct({...addProduct,[name]:value})
    }

   const handleSubmit =async(e) =>{
        e.preventDefault();
// console.log('Hello')
        const newRecord ={...addProduct, id:new Date().getTime().toString()}

        setRecords([...records, newRecord]);

        setProduct({Image:"", Category:"",product_name:"",Price:"",Stock:"",Discription:""});

        const addNewproduct={
            Imageurl:addProduct.Image,
            Category:addProduct.Category,
            product_name:addProduct.product_name,
            // product_Brand_Name:addProduct.product_Brand_Name,
            Price:addProduct.Price,
            Stock:addProduct.Stock,
            Discription:addProduct.Discription
        }
       await axios.post('/api/products',addNewproduct)
       .then(()=>{
           toast.success('Product added succesfully in db!')
           history.push('/admin')
       })
       .catch(()=>toast.error('Failed to add product!'))
    }
    return(
    <div>
        <NavBarAdmin/>
    <br/>
    <div className="container">
    
    <h2 className="text-danger">Add New Product</h2>
    <form action="" onSubmit={handleSubmit}>
        <div >
            <label className="label" htmlFor="Image">Imageurl</label>
            <br/>
            <input className="input1" type="text"  value={addProduct.Image}
               onChange={handleInput} name="Image" id="Image" required></input>
        </div>
        <div >
            <label className="label" htmlFor="Category">Category</label>
            <br/>
            <input className="input1" type="text"  value={addProduct.Category}
               onChange={handleInput} name="Category" id="Category" required></input>
        </div>
        <div >
            <label className="label" htmlFor="product_name">Product Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_name}
             onChange={handleInput} name="product_name" id="product_name"  required></input>
        </div>
        {/* <div >
            <label className="label" htmlFor="product_Brand_Name">Product Brand Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_Brand_Name}
             onChange={handleInput} name="product_Brand_Name" id="product_Brand_Name"  required></input>
        </div> */}
        <div >
            <label className="label" htmlFor="Price">Price</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Price} 
            onChange={handleInput} name="Price" id="Price" required></input>
        </div>
        <div >
            <label className="label" htmlFor="Stock">Total Stock</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Stock} 
            onChange={handleInput} name="Stock" id="Stock"  required></input>
        </div>
        <div >
            <label className="label" htmlFor="Discription">Description</label>
            <br/>
            <input className="dis" type="text" value={addProduct.Discription} 
            onChange={handleInput} name="Discription" id="Discription"  required></input>
        </div>
        <br/>
    <button className="btn btn-success" type="submit">Save Product</button>
    </form>
</div>

    {/* <div className="row">
        {
            records.map( (curElem)=>{
                return(
                    <div className="col">
                    <p> <img src ={curElem.Image}></img></p>
                    <p> {curElem.Category}</p>
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
    </div> */}
    </div>
    );
};
export default ProductList;