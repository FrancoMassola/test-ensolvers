const { user } = require("../testDataLogin-BD/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
  const { user_name, password } = req.body;
  if (user_name !== user.username)
    return await res.status(401).send("The user doesn't exist");
  //encrypt the mock password
  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    bcrypt.compare(password, hash).then(function (result) {
      if (!result) {
        return res.status(401).send("Wrong Password");
      } else {
        //add a token to the user session if the user exist
        const token = jwt.sign({ user_name }, "secretKey");
        //login ok
        return res.status(200).json({ token });
      }
    });
  });
};

module.exports = {
  signin,
};
