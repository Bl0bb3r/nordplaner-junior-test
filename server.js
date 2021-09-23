const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Endpoints
const itemRouter = require("./items/itemAPI");

const app = express();

app.use(express.json());

// DB config key using mongoDB Uri - simplified - should be in .env
const db = require("./config/keys").mongoURI;

// actual connection to mongoDB *Promise*
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "build/")));

app.use("/api", itemRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
