const { default: axios } = require("axios");

const get_products = async (req, res, next) => {
  try {
    let { data } = await axios("https://fakestoreapi.com/products");
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get_products
};
