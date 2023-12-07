require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menusRoutes = require("./routes/menusRoutes");
const customersRoutes = require("./routes/customerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(menusRoutes);
app.use(customersRoutes);
app.use(bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
