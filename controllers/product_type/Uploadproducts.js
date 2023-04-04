const schemas = require("../../mongodb/schemas/schemas");
const ImageUtil = require("../../middleware/files/FileUtil");

const Uploadproduct = async (req, res) => {

  let filenames = ImageUtil.GetFilenameArray(req);
  var type = new schemas.Type({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    type: req.body.type,
    quantity: req.body.quantity,
    price: req.body.price,
    num_files: filenames.length,
    filenames: filenames,
    type_id: req.body.type_id,
  });

  try {
    await type.save();
    console.log(" saved to type collection.");
    res.status(200).json({ message: "successfully registered new product" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = Uploadproduct;

