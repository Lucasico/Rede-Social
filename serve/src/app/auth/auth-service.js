const User = require("../users/Users-model");
const bcrypt = require("bcrypt");
const schema = require("./schemaValidation");

module.exports = {

  login: async(req, res) => {
    try {
      const {email, password} = req.body;
      
      await schema.validate({email, password}).catch(function (err) {
        res.status(400).json({
          content: {
            erros: err.errors
          },
          status: "SUCCESS"
        })
      });

      const user = await User.findOne({ email:email })
      !user && res.status(404).json({
        content:'Usuário não encontrado',
        status:'SUCCESS'
      })

      const validPassword = await bcrypt.compare(password, user.password);
      !validPassword && res.status(400).json({
        content: 'Login ou senha inválido(s)',
        status: "SUCCESS"
      })

      res.status(200).json({
        content: user,
        status:'SUCCESS'
      })
      
    } catch (error) {
      console.error("erro", error);
      res.status(500).json({
        message:"Error ao realizar login",
        status:"ERROR"
      });
    }
  }

}

//parou em 35:05 da primeira aula