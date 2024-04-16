//basic Library Import
const express = require('express');
const router=require('./src/route/api')
const app=new express();
const ratelimit=require('express-rate-limit');
const helmet=require('helmet');
const hpp= require('hpp');
const cors=require('cors');
const cookieParser=require('cookie-parser')
const path=require("path")
const mongoose = require("mongoose");


//cors open

app.use(cors());

//security Impelementation

app.use(helmet());
app.use(hpp());
app.use(cookieParser())
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({limit:'20mb'}));
const limit=ratelimit({windowMs:15*60*1000,max:3000});
app.use(limit)


//Database Connection
let URl="mongodb+srv://jibonmahmud06:jibon@jibon.mwtm9lz.mongodb.net/crud"
let OPTION={user:'jibonmahmud06',pass:'jibon',autoIndex:true}

mongoose.connect(URl,OPTION).then((res)=>{
    console.log("DataBase Connect Success")
}).catch((err)=>{
    console.log(err)
})

app.set('etag', false)

app.use("/api",router)
app.use(express.static('client/dist'))

//Add React Font End Routing

app.get('*',function (req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


module.exports=app;

