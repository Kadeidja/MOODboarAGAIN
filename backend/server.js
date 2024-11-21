const expressRequire = require('express');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER
//BDD CONNEXION------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    const expressApp = expressRequire();

//MIDDLEWARE
//expressApp.use(expressRequire.json());

//REQUIRED ROUTES
expressApp.use('/', require('./routes/userRoutes'))

//PORT CONNEXION-------------------------------------------------------------------------------------
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.MY_BCK_PORT || 4000)

expressApp.listen(
  port,() =>{
      console.log(`Server is running on port ${port}`);
  }
);


module.exports = expressApp;