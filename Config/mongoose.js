const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/Coupons");

mongoose.connect(
  "mongodb+srv://mehra213:Zd6UGyhgNDvopnHl@cluster0.pooba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to Mongo db"));

db.once("open", function () {
  console.log("connected to database :: mongo db");
});

module.exports = db;
