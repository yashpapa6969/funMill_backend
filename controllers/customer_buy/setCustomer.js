const { Customer } = require("../../mongodb/schemas/schemas");

const setCustomer = async (req, res) => {


  const customer = new Customer({
    productName: req.body.type,
    type: req.body.type,
    quantity_bought: req.body.type,
    price: req.body.type,
    product_id: req.body.type,
    type_id: req.body.type,
    user_id: req.body.type,
    streetAddress: req.body.type,
    state : req.body.type,
    city : req.body.type,
    pincode : req.body.type,
    phoneNo : req.body.type,
    apartment :req.body.type,
    payment_done : req.body.type,
    total_price: req.body.type,
  
  });

  try {
    const result = await customer.save();

    console.log(result);
    res.status(200).json({ message: "Successfully set customer!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = setCustomer;
