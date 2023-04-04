const express = require('express');
const cors = require('cors');
const { createServer } = require("http");
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
//const bodyParser = require('body-parser')
const ConnectToDb = require('./mongodb/mongo_connect');


ConnectToDb();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/client', clientRoutes);
//app.use('/api/admin', adminRoutes);

const httpServer = createServer(app);

httpServer.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
