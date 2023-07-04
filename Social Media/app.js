const express=require('express');
const adduser_controller=require('./addingusercontroller');
const path=require('path');
const mongoose=require('mongoose');
const mongoConnect=require('./database').mongoConnect;
const bodyParser=require('body-parser');
const authenticator=require('./authenticator');
const App=express();

App.use(bodyParser.urlencoded({ extended:false}))
App.use(express.static(path.join(__dirname,"public")))


App.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'login.html'));
})

App.get('/registration.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'registration.html'));
})

App.post('/addform.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'addform.html'));
})
App.use(authenticator);
App.use(adduser_controller);

mongoConnect(()=>{console.log(`connection for sessions check is made`)});
port=3000;
// listening port
mongoose.connect('mongodb+srv://Chulbul:uiet123@cluster0.o92arat.mongodb.net/igdata?w=majority')
.then(result=>{
    App.listen(port,()=>{console.log(`this app is listening to port:${port}`)});
})
.catch(err=>{
    console.log(`error in connection to database on app.js page:\n ${err}`);
})