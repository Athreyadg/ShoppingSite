require("dotenv").config();

const productData = require("./data/products.js");
const connectDB = require("./config/db.js");
const Product = require("./models/Product.js");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();