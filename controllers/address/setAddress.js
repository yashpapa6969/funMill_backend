const { Address } = require("../../mongodb/schemas/schemas");

const setAddress = async (req, res) => {
    let _user_id = req.params.user_id;


  const address = new Address({
    streetAddress: req.body.streetAddress,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    phoneNo: req.body.phoneNo,
    apartment: req.body.apartment,
    user_id: _user_id,
  });

  try {
    const result = await address.save(
      { user_id: _user_id },
      { $set: address.toObject() },
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
