const { Address } = require("../../mongodb/schemas/schemas");

const getAddress = async (req, res) => {
  const userId = req.params.user_id;

  try {
    const address = await Address.findOne({ user_id: userId });

    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json({ address });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAddress;
