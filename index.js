const serverless = require("serverless-http");
const express = require("express");
const cors = require('cors');
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const ConnectToDb = require('./mongodb/mongo_connect');
const { createServer } = require("http");


const port = 3000;
ConnectToDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/client', clientRoutes);
app.use('/api/admin', adminRoutes);
const httpServer = createServer(app);

httpServer.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

//module.exports.handler = serverless(app);