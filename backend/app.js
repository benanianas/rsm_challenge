const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
var https = require('https');
var http = require('http');
var fs = require('fs');
const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('./client-key.pem'),
  cert: fs.readFileSync('./client-cert.pem')
};

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

http.createServer(app).listen(3000);
https.createServer(options, app).listen(5000);