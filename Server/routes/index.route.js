// Route
const createMarketRoutes = require('./createMarket.route.js');

// MiddleWare
//const authMiddleWare = require(`../middlewares/admin/auth.middleware.js`)

// Address
const systemConfig = require('../config/system.js');



module.exports = (app) => {
    const PATH = systemConfig.prefixAdmin;

    app.use(PATH + '/create-market', createMarketRoutes);

};
