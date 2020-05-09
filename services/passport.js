const passport=require('passport');
const mongoose=require('mongoose');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: "679163885433-n15sv2bc33ngfbag862792kac6uiebfu.apps.googleusercontent.com",
    clientSecret:"9d0qjZpelRfjkNHB6WrtZk2D",
    callbackURL:"/auth/google/callback"
},(accessToken,refreshToken,profile,none)=>{
    const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rahul9115:nanaamma@cluster0-d6yk7.mongodb.net/test?retryWrites=true&w=majority";

  MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongo");
  var myobj = {googleId:profile.id};
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
    
}));