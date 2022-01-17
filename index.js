const express = require("express");
const cors = require("cors");
const client = require("prom-client")
const {encode, decode} = require('./utils')


// ******************************************************
// **********************App config**********************
// ******************************************************

// Express app
const app = express();
app.use(cors());

// Collect health metrics every 5s
const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics({timeout : 5000})

// Custom metrics for total requests in app
const counterEnc = new client.Counter({
  name: "node_encode_request_total",
  help: "The total number of encode requests"
})

const counterDec = new client.Counter({
  name: "node_decode_request_total",
  help: "The total number of decode requests"
})

// ******************************************************
// ***************functional endpoints*******************
// ******************************************************

// Encode string to base64
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

// Decode string from base64
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



// ******************************************************
// ***************additional endpoints*******************
// ******************************************************

// Healthcheck enpoint
app.get("/ping", (req, res) => {
  return res.status(200).send("pong");
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType)
  res.end( await client.register.metrics())
});


// ******************************************************
// **************server execution config*****************
// ******************************************************

var port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log("App started.");
});
