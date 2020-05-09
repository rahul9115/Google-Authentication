const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const host = '0.0.0.0';
app.get("/auth/google", (req, res) => {
    res.send("Hello");
});
app.listen(PORT, host, function () {
    console.log("Server started.......");
});
