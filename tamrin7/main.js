
const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');

///middle way those who have use 
// app.use('/', (req, res, next) => {
//     console.log(req.url);
//     console.log(1);
//     req.test = "test";
//     res.send;
//     next();
// })

// console.log(__dirname);
// console.log(__filename);

// app.get('/', (req, res) => {
//     // console.log(req);
//     res.send("hello")
// });
console.log(__dirname);
app.get('/', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname , './public/index.html'))
});
app.get('/home', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname , './public/index.html'))
});
app.get('/about', (req, res) => {
    res.send("About")
});
app.get('/contact', (req, res) => {
    res.send("Contact")
});


app.listen(8080, () => {
    console.log("server  7 is on");
})