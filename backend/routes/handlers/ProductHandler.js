const productModel = require("../../models/ProductModel");

const getAllProduct = (req, res) => {
  productModel.find({}, (err, result) => {
    if (err) {
      res.send(`Error: ${err}`);
    } else {
      let page = parseInt(req.params.page);
      let itemLimit = 5;
      let totalPages =
        result.length % itemLimit != 0
          ? Math.floor(result.length / itemLimit) + 1
          : result.length / itemLimit;
      let startIndex = page == 1 ? 0 : itemLimit * (page - 1);
      let endIndex = page === totalPages ? result.length : itemLimit * page;

      let items = [];

      for (startIndex; startIndex < endIndex; startIndex++) {
        items.push(result[startIndex]);
      }

      res.json({ result: items, totalPage: totalPages, currentPage: page });
    }
  });
};

const getProductById = (req, res) => {
  productModel.findById(req.params.id, (err, result) => {
    if (err) res.send(`Error: ${err}`);
    else res.json(result);
  });
};

module.exports = { getAllProduct, getProductById };
