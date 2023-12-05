const express = require("express");
const router = express.Router();

const customerController = require("../controller/customerController");

router.post("/customers", customerController.createCustomers);

module.exports = router;
