const express = require('express');
// const { url } = require('inspector');
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))


///middle way those who have use 
app.use('/', (req, res, next) => {
    console.log(1);
    req.test = "test";
    res.send;
    next()
})

console.log(__dirname);
console.log(__filename);

app.get('/', (req, res) => {
    // console.log(req);
    res.send("hello ")
});

app.get('/content', (req, res) => {
    // console.log(req);
    res.send("content ")
});

app.get('/contact', (req, res) => {
    // console.log(req);
    res.send("contact")
});

app.get('/address', (req, res) => {
    // console.log(req);
    res.send("address ")
});


app.listen(5005, () => {
    console.log("server  3 is on");
})
