const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
};
const routes=require('./routes/todoroutes')
require('dotenv').config();
const app=express();
//const PORT=process.env.port || 5000

app.use(express.json())

app.use(cors(corsOptions));

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('Connected to MONGO-DB'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(8000,()=>console.log('Listening on port: 8000'))