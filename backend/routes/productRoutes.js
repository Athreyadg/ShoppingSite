const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getProductsByCategory,
} = require("../controller/productControllers");
const Product = require("../models/Product");
router.get("/", getProducts);

router.get("/:id", getProductById); 
router.get("/categories/:category", getProductsByCategory)
router.route('/:id').delete(async(req,res)=>{
  const id=req.params.id
  console.log(id)
  try{
    const result=await Product.findByIdAndDelete(id)
    console.log(result)
    res.send(result)
  }
  catch(err){
    console.log(err)
  }
})

router.route("/").post(async(req,res)=>{
  const _id=req.body._id;
  const imageUrl=req.body.Imageurl;
  const category=req.body.Category;
  const name=req.body.product_name;
  const price=req.body.Price;
  const countInStock=req.body.Stock;
  const description=req.body.Discription;
console.log(imageUrl)
console.log(category)
console.log(name)
  const addNewproduct=new Product({
   
      name,
      category,
      imageUrl,
      description,
      price,
      countInStock,
      
      
  });

  try{
    const result=await addNewproduct.save()
    console.log(result)
    res.send(result)
  }
  catch(err){
    console.log(err)
  }
  
})
router.route("/").patch(async(req,res)=>{
  const _id=req.body._id;
  const category=req.body.category;
  const name=req.body.product_name;
  const price=req.body.Price;
  const countInStock=req.body.Stock;
  const description=req.body.Discription;
console.log(category)
console.log(name)
  // const updateProduct=new Product({
   
  //     name,
  //     category,
  //     description,
  //     price,
  //     countInStock,
      
      
  // });

  try{
    const result=await Product.findOneAndUpdate({name:name},{category:category,description:description,price:price,countInStock:countInStock})
    console.log(result)
    res.send(result)
  }
  catch(err){
    console.log(err)
  }
  
})
module.exports = router;
