const express=require('express');
const mongoose = require('mongoose');
const passportConfig=require('./services/passport');
const app=express();
const cookieSession=require("cookie-session");
const passport=require("passport");
const authroutes=require('./routes/authenticate');
const keys=require("./keys/keys");

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookiekey]

    })
);
app.use(passport.initialize());
app.use(passport.session())
authroutes(app);

const PORT=process.env.PORT || 5000;
const host="0.0.0.0";

app.listen(PORT,host, function (){
    console.log("Server Started");
});