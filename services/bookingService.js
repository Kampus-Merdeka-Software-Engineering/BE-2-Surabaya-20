const prisma = require("../config/prisma");

async function createBooking(booking) {
  try {
    return await prisma.bookings.create({
      data: booking,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createBooking,
};
