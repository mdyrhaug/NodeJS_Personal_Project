const express = require("express");
const app = express();
const routes = require('./routes/routes.js');

app.use(routes);

console.log("wow!");
app.listen(5001);
