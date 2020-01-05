const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

const db = require("./models");
const PORT = process.env.PORT || 3000;

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.connect(MONGODB_URI);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controller/controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
