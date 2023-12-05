const customerService = require("../services/customersService");

async function createCustomers(req, res) {
  const customers = req.body;

  const createdCustomer = await customersService.createCustomers();
  res.status(201).json(createdCustomer);
}

module.exports = {
  createCustomers,
};
