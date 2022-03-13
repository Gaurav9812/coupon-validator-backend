const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const db = require("./Config/mongoose");
//
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.urlencoded());

app.use("/", require("./Routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in setting up server ${err}`);
    return;
  }
  console.log(`server is running on port :${port}`);
});
