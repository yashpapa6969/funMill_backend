const schemas = require('../../mongodb/schemas/schemas');

const LoginUser = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await schemas.User.findOne({email:email});

        if (password === user.password) {
            res.status(200).json({
                "status": "success",
                "message": "successfully authenticated",
                "student_id": user.user_id
            });
        } else {
            res.status(400).json({
                "status": "failure",
                "message": "wrong username or password"
            });
        }
    } catch (error) {
        res.status(400).json({
            "status": "failure",
            "message": error.message
        });
    }
}   

module.exports = LoginUser;


