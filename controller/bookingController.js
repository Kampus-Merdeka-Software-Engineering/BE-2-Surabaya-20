const bookingService = require("../services/bookingService");

async function createBooking(req, res) {
  const booking = req.body;

  const createdBooking = await bookingService.createBooking(booking);
  res.status(201).json(createdBooking);
}

module.exports = {
  createBooking,
};
