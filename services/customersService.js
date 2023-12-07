const prisma = require("../config/prisma");

async function createCustomers(customers) {
  try {
    return await prisma.customers.create({
      data: customers,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCustomers,
};
