const yup = require("yup");

const schema = yup.object().shape({
  username:yup.string().required("nome é obrigatório").min(3).max(20),
  email:yup.string().required("Email é obrigatório").email("Formato de email inválido").max(50),
  password:yup.string().required("Senha é obrigatório").min(6)
})

module.exports = schema