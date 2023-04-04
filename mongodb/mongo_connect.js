const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})

function ConnectToDb() {
  const url = process.env.MONGODB_URI
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
  
}


module.exports = ConnectToDb;


//const mongoURI = "mongodb+srv://yashpapa69:cj12YCx4A5oxw8P1@cluster0.up8mscc.mongodb.net/test";
