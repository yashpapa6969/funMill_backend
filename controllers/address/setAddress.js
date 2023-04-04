const { Address } = require("../../mongodb/schemas/schemas");

const setAddress = async (req, res) => {
  const userId = req.params.user_id;

  const address = new Address({
    streetAddress: req.body.streetAddress,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    phoneNo: req.body.phoneNo,
    apartment: req.body.apartment,
    user_id: userId,
  });

  try {
    const result = await Address.updateOne(
      { user_id: userId },
      { upsert: true }
    );

    console.log(result);
    res.status(200).json({ message: "Successfully set address!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = setAddress;
