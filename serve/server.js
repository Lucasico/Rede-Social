const express = require("express");
const app = express();
const routes = require("./src/routes")
const mongoConnection = require('../serve/src/database/mongodb')
const helmet = require("helmet");
const morgan = require("morgan");

mongoConnection()

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(routes)

app.listen(8800,() => {
  console.log("Backend server is running");
})