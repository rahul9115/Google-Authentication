process.env.UV_THREADPOOL_SIZE=10;
const crypto = require("crypto");
const start=Date.now();
function logHashTime(){
 crypto.pbkdf2("a","b",10000,512,"sha512",()=>{
     console.log("Hash :",Date.now()-start)
 })
};
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
