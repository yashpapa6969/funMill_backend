const mongoose = require('mongoose')


function ConnectToDb() {
  const mongoURI = "mongodb+srv://yashpapa69:cj12YCx4A5oxw8P1@cluster0.up8mscc.mongodb.net/test";
  const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(mongoURI, dbConfig)
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.error("DB connection error:", error);
    });

}


module.exports = ConnectToDb;



