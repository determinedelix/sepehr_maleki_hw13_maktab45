const express = require('express')

const router  = express.Router()



router.get('/',(req,res)=>{
    // app.use(express.static(path.join(__dirname,'public')))
    res.send;
})



// router.post('/getAllusers',(req,res)=>{

//     console.log(111);
//     console.log("cccc");
//     console.log(req.url);
//     console.log(req.body);
// })

module.exports = router
