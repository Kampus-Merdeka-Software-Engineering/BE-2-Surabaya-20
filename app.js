require("dotenv").config();
const express = require("express");

const app = express();
const router = express.Router();

router.get("/customers", (req, res) => {
  res.send("Hello");
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
