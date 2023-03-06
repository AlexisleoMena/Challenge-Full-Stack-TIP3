const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);
app.use("/", routes);
app.use(errorHandler);

module.exports = app;
