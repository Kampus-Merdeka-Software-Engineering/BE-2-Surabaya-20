const customerService = require("../services/customersService");

async function createCustomers(req, res) {
  const customers = req.body;

  const createdCustomer = await customerService.createCustomers(customers);
  res.status(201).json(createdCustomer);
}

module.exports = {
  createCustomers,
};
