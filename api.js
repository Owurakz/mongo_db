const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://owurakusintim:r9SEuFdyIwX08PH1@cluster0.dnzxtnp.mongodb.net/"
      )
      .then((res) => {
        console.log("mongoDb cconnected");
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
