const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');

app.use("", function (req, res) {
    let a = `${req.url}.html`
    console.log(a);
    res.sendFile(path.join(path.join(publicPath , a)));
});

// app.get('/', function (req, res) {
//     res.send("helloo")
// });
app.listen(5005, () => {
    console.log("server  6 is on");
})