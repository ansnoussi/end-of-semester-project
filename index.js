const express = require("express");
const cors = require("cors");
const {encode, decode} = require('./utils')


const app = express();
app.use(cors());


app.get("/ping", (req, res) => {
  return res.status(200).send("pong");
});

app.get("/encode/:str", (req, res) => {
  try {
    
    let str = req.params.str;
    
    return res.status(200).json({
      encoded: encode(str),
    });

  } catch (e) {
    return res.status(400).send("please supply string.");
  }
});

app.get("/decode/:str", (req, res) => {
  try {

    let str = req.params.str;
    
    return res.status(200).json({
      encoded: decode(str),
    });

  } catch (e) {
    return res.status(400).send("please supply string.");
  }
});



var port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log("Microservice started.");
});
