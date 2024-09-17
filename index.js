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
//routes
//check
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

module.exports = (req, res) => {
  //set header first to allow request or origin domain (value can be different)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS, DELETE"
  );

  //---- other code

  //Preflight CORS handler
  if (req.method === "OPTIONS") {
    return res.status(200).json({
      body: "OK",
    });
  }
};

app.use(cors());
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
