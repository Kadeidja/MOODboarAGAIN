const httpModule = require('http');
const dbconnexion = require('./bddconnexion')
const expressRequire = require('express');
const expressApp = expressRequire();
const dotenvApp = require('dotenv').config();


expressApp.use(bodyParser.json());
expressApp.use(expressRequire.json());
expressApp.use(cors());
expressApp.use('/',require('./routes/userRoutes'))

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
dbconnexion.set('port', port);
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

const portServer = httpModule.createServer(dbconnexion)
portServer.on('error', errorHandler);
portServer.on('listening', () => {
  const address = portServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

portServer.listen(port);

