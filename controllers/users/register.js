const schemas = require("../../mongodb/schemas/schemas");

const NewUser = async (req, res) => {
  const { fname, lname,emailAddress, password, cpassword,user_id } = req.body;

  try {
    const user1 = await schemas.User.findOne({ email: emailAddress });
    if (user1) {
      res.status(400).json({ message: "User is already registered" });
    } else {
      const user = new schemas.User({
        fname,
        lname,
        emailAddress,
        password,
        cpassword,
        user_id,
      });
      await user.save();
      console.log(" saved to users collection.");
      console.log(user);
      res.status(200).json({
        message: "Successfully registered!",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = NewUser;
