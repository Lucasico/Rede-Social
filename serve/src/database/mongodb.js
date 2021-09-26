module.exports = () => {
  const dotenv = require("dotenv");
  const mongoose = require('mongoose');

  dotenv.config();

  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on('connected', () => {
      console.log(' ==> Conectado ao MongoDB com sucesso <== ');
  });

  mongoose.connection.on('error', (error) => {
      console.log(' ** Erro ao conectar ao MongoDB ** ');
      console.log(' ** Erro: ' + error + ' ** ');
  });

  mongoose.connection.on('disconnected', () => {
      console.log(' ==> Desconectado com sucesso do MongoDB <==');
  });
}