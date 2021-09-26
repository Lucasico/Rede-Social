const User = require("./Users-model");
const bcrypt = require("bcrypt");
const schema = require("./schemaValidation");

module.exports = {
 
  register: async(req, res) => {
    try {
      const {username, email, password} = req.body;

      await schema.validate({username, email, password}).catch((err) => {
        res.status(400).json({
          content: {
            erros: err.errors
          },
          status: "SUCCESS"
        })
      });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const userAlreadExist = await User.findOne({ email:email })
      userAlreadExist && res.status(404).json({
        content:'Já existe um usuário(a) cadastrado com essas informações',
        status:'SUCCESS'
      })

      const user = await User.create({
        username,
        email,
        password: hashedPassword
       });

      res.status("201").json({
        content: user,
        status: "SUCCESS"
      });

    } catch (error) {
      console.error("erro", error);
      res.status(500).json({
        message:"Error ao criar usuario",
        status:"ERROR"
      });
    }
  }

}