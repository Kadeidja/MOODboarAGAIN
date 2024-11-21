const expressRequire = require('express');
const expressRouter = expressRequire.Router();
const cors = require('cors');
const {test,subscriptionUser} = require('../controllers/userControllers')

//MIDDLEWARE ROUTER
expressRouter.use(
    cors({
        credentials : true,
        origin: 'http://localhost:3000',
    })
)

expressRouter.get('/login', test)
expressRouter.post('/register', subscriptionUser)

module.exports = expressRouter;
//ok files