const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./api");

const app = express();

connectDb();

const Port = 4000;

app.listen(Port, () => {
  console.log(`server running due to differences`);
});
