const express = require('express');

const route = express.Router();


route.get('/',(req,res)=>{
    console.log('home')
    res.sendFile(__dirname+'/html/home.html')
})

route.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/html/service.html')
})

route.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/html/contact.html')
})

module.exports = route