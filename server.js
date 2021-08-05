//SOC
const express = require("express");
var path = require("path");
var app = express();


//HTTP middlware configuration
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

//Router config
var routes = require("./router");
routes(app);

//Server Listen Mode
app.listen(6969)
console.log("server is listening on 6969");

