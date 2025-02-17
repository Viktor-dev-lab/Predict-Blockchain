const express = require('express');
const app = express();

app.get("/api", (req,res) => {
  res.json("user");
})

app.listen(5000, () => {console.log("Server running 5000 port")})