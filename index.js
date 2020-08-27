const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const app = express();
require('dotenv/config');

app.use(parser.json());
//importing routes
const postroute = require('./Posts/posts');

//posts route
app.use('/posts',postroute);

app.get('/',(req,res)=>{
    res.send('helloworld!!!');
});


const db = process.env.DB_CONN
const port = process.env.PORT || 3000
mongoose.connect(db,{useNewURLParser:true},()=>console.log("COnnected to DB.."))
app.listen(port, () => console.log('listnening on port 3000...'))