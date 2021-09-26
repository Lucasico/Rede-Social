const yup = require("yup");

const schema = yup.object().shape({
  email:yup.string().required("Email é obrigatório").email("Formato de email inválido"),
  password:yup.string().required("Senha é obrigatório").min(6)
})

module.exports = schema