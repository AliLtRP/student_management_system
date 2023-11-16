const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { rateLimit } = require('express-rate-limit');
const cors = require('cors');
const { databaseConnection } = require('./database/database');
const { router } = require('./router/routes');
 


// use cors for security
app.use(cors({
    origin: "*",
}));


// parse incoming requests to json 
app.use(express.json());


// only 10 requests per minute
app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min
    limit: 10
}));


// mount router middleware
app.use(router);

// connect to database
databaseConnection();


// app is listen to port 3000
app.listen(3000, ()=> console.log('app is working on port 3000'));