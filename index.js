const express = require("express");
const cors = require("cors");
const client = require("prom-client")
const {encode, decode} = require('./utils')


const app = express();
app.use(cors());

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics({timeout : 5000})

const counterEnc = new client.Counter({
  name: "node_encode_request_total",
  help: "The total number of encode requests"
})

const counterDec = new client.Counter({
  name: "node_decode_request_total",
  help: "The total number of decode requests"
})



app.get("/encode/:str", (req, res) => {
  try {
    
    let str = req.params.str;
    counterEnc.inc()
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
    counterDec.inc()
    return res.status(200).json({
      encoded: decode(str),
    });

  } catch (e) {
    return res.status(400).send("please supply string.");
  }
});



app.get("/ping", (req, res) => {
  return res.status(200).send("pong");
});


app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType)
  res.end( await client.register.metrics())
});


var port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log("Microservice started.");
});
