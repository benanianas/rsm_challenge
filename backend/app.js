const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const port = 3000;

require('dotenv').config();

app.use(cors())

const { Breweries } = require("./model");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "harrisburg_breweries",
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/get_harrisburg_breweries", async (req, res) => {
  try {
    const data = await Breweries.find();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
