const express = require("express");
const cors = require("cors");
const studentRouter = require("./router/student.router");
const mediaRouter = require("./router/media.router");
const errorHandler = require("./error/errorHandler");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(studentRouter);
app.use(mediaRouter);
app.use(function (req, res, next) {
  res.status(404).json({
    error: true,
    codigo: 404,
    message: "Endpoint not found",
  });
});

app.use(errorHandler);

module.exports = app;
