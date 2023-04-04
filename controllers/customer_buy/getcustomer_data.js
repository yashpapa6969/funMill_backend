const { Customer } = require("../../mongodb/schemas/schemas");

const getCustomer = async (req, res) => {

  try {
    const customer = await Customer.findOne({});

    if (!customer) {
      return res.status(404).json({ message: "customer not found" });
    }

    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = getCustomer;