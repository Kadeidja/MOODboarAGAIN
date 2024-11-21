const httpModule = require('http');
const dbconnexion = require('./bddconnexion')
const expressRequire = require('express');
const expressApp = expressRequire();
const dotenvApp = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const userRouter = require('./routes/userRoutes')


const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER

//BDD CONNEXION------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


expressApp.use(expressRequire.json());
//expressApp.use(cors());

//REQUIRED ROUTES 
expressApp.use('/',require('./routes/userRoutes'))
expressApp.use("/",userRouter );
expressApp.use("/register", userRouter);

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
//HANDLING SERVER ERROR-----------------------------------------------------------------------------------
/*expressApp.set('port', port);
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const portServer = httpModule.createServer(expressApp)
portServer.on('error', errorHandler);
portServer.on('listening', () => {
  const address = portServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

portServer.listen(port);
*/
expressApp.listen(
    port,() =>{
        console.log(`Server is running on port ${port}`);
    }
);


module.exports = expressApp;