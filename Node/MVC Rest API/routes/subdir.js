const express = require('express');
const router = express.Router();
const path = require('path');
const dirname = require('path').dirname;
const PORT = process.env.PORT || 3500;

router.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','views','subdir','index.html'));
})

router.get('/test(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','views','subdir','test.html'));
})


module.exports = router;