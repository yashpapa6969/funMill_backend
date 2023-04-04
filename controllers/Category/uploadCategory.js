const { Category } = require("../../mongodb/schemas/schemas");

const setCategory = async (req, res) => {


  const category = new Category({
    type: req.body.type,   
  });

  try {
    const result = await category.save();

    console.log(result);
    res.status(200).json({ message: "Successfully set category!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = setCategory;
