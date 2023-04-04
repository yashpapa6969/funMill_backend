const schemas = require("../../mongodb/schemas/schemas");
const FileUtil = require("../../middleware/files/FileUtil");

const GetAllProducts = async (req, res) => {
  try {
    const products = await schemas.Type.find({});
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    } else {
      FileUtil.GetFileUrls(products);
      res.status(200).json({ all_products: products });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = GetAllProducts;
