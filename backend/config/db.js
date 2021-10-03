require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    await mongoose.connect('mongodb+srv://athreya21:athreya21@cluster0.oxwxi.mongodb.net/my-db?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    );

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    // console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
