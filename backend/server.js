const expressRequire = require('express');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER
const expressApp = expressRequire();

//BDD CONNEXION------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    /*expressApp.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
*/
//MIDDLEWARE
expressApp.use(expressRequire.json());

/*expressApp.get('/', (req, res) => {
  request(
    { url: 'http://localhost:3000' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});*/
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