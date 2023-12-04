function getAllmenus(req, res) {
  res.json({
    menus: [
      {
        name: "Chokolate drink",
        price: "15000",
      },
    ],
  });
}

module.exports = {
  getAllmenus,
};
