const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");

// CORS configuration
app.use(
  cors({
    origin: ["https://bookistaa.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("frontend/public"));

app.get("/", (req, res, next) => res.json("Hello world"));
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
