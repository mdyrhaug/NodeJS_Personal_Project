const express = require("express");
const router = require('./routes/routes');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use('/', router);

app.use((req, res, next) => {
    res.status(404).render('404',{"pageTitle":"Page Not Found"});
})

console.log("wow!");
app.listen(5001);
