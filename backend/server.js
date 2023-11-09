const express = require("express");
const mongoose = require("mongoose");
const { PORT, URI } = require("./config");
const router = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/products", router);
mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
