var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "Public/Templates"));
app.set("port", process.env.PORT || 3000);

app.use(express.static("./Public"));
app.use(require("./Public/Routes/"));
app.use(require("./Public/Routes/index.js"));
app.use(require("./Public/Routes/feedback.js"));
app.use(require("./Public/Routes/thankyou.js"));

app.listen(app.get("port"));
console.log("Comp308 Lab 1 running on " + app.get("port") + "...");