const { Category } = require("../../mongodb/schemas/schemas");

const getCategory = async (req, res) => {

  try {
    const category = await Category.findOne({});

    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }

    res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = getCategory;