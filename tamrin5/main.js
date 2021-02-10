
const express = require('express');
const app = express()
const path = require('path')
app.use(express.json())

///middle way those who have use 
app.use('/', (req, res, next) => {
    console.log(req.url);
    console.log(1);
    req.test = "test";
    res.send;
    next();
})

console.log(__dirname);
console.log(__filename);

app.get('/', (req, res) => {
    // console.log(req);
    res.send("hello")
});
console.log(__dirname);
app.get('/index1', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname , './public/index1.html'))
});

app.get('/index2', (req, res) => {
    res.sendFile(path.join(__dirname , './public/index2.html'))
});
app.get('/index3', (req, res) => {
    res.sendFile(path.join(__dirname , './public/index3.html'))
});
app.get('/index4', (req, res) => {
    res.sendFile(path.join(__dirname , './public/index4.html'))
});
app.get('/index5', (req, res) => {
    res.sendFile(path.join(__dirname , './public/index5.html'))
});

app.listen(8080, () => {
    console.log("server  5 is on");
})













/////////////////////////////////////////////////////////////
