const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { rateLimit } = require('express-rate-limit');
const cors = require('cors');
const { databaseConnection } = require('./database/database');
const { router } = require('./router/routes');
 


app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min
    limit: 10
}));


app.use(router);
databaseConnection();

app.listen(3000, ()=> console.log('app is working on port 3000'));