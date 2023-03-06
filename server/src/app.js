const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use(errorHandler);

module.exports = app;
