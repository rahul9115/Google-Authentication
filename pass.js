const express=require('express');
const MongoClient = require('mongodb').MongoClient;
const passportConfig=require('./services/passport');
const app=express();
const authroutes=require('./routes/authenticate');
authroutes(app);
const PORT=process.env.PORT || 5000;
const host="0.0.0.0";

app.listen(PORT,host, function (){
    console.log("Server Started");
});