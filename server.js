
const express = require('express');

const app =express();

const router = require('./route');

app.use(express.static(__dirname+'/html'))
app.use('/',router);



// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/html/home.html')
// })
// app.get('/service',(req,res)=>{
//     res.sendFile(__dirname+'/html/service.html')
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/html/contact.html')
// })



app.listen(5000,()=>{
    console.log('server listen 5000');
})