const expressRequire = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenvApp = require('dotenv').config();
const expressApp = expressRequire();

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER

//BDD CONNEXION------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  
expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  expressApp.use(bodyParser.json());
  expressApp.use(expressRequire.json());
  expressApp.use(cors());

/*
//ROUTES ET MIDDLEWARES----------------------------------------------------------------------------------------

//LES ROUTERS
  const carrerRouter = require('./routes/CarrerRoute')
  const workRouter = require('./routes/WorkRoute')
  //MIDDLEWARE
  expressApp.use("/", carrerRouter);
  expressApp.use("/carrer", carrerRouter);
  expressApp.use("/", workRouter);
  expressApp.use("/work", workRouter);

  const userRouter = require('./routes/userRoute')

  expressApp.use("/",userRouter );
  expressApp.use("/register", userRouter);

*/
const userRouter = require('./routes/userRoutes')

expressApp.use("/",userRouter );
expressApp.use("/register", userRouter);
expressApp.use("/test", userRouter);


module.exports = expressApp;