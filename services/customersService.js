const prisma = require("../config/prisma");

async function createCustomers() {
  try {
    return await prisma.customers.create();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCustomers,
};
