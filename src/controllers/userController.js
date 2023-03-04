const { handleLoginUser } = require("../services/userServices");

const handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({
      errCode: 1,
      message: "Missing inputs parameters",
    });
  }

  let userData = await handleLoginUser(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.message,
    data: userData.user ? userData.user : {},
  });
};

module.exports = { handleLogin };
