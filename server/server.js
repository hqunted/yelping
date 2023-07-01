require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getRestaurants", (req, res) => {
  res.json({
    status: "success",
    restaurant: "mcdonalds",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
