const express=require('express');
const path=require('path');
const bodyparse=require('body-parser');
const user=require('./usermodel');
const { hashfunction } = require('./hashfuntionmodel');
const getDB=require('./database').getDB;
const app=express.Router();

//body parser 
app.use(bodyparse.urlencoded({extended:true}));

// getting data from addform
app.post('/addformnow.html',(req,res,next)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const gender=req.body.gender;
    const dob=req.body.dob;
    const aadhar=req.body.aadhar;
    const mobile=req.body.mobile;
    const email=req.body.email;
    const loginpassword=req.body.loginpassword;

    // filling out our schema with details of a new student

    const new_student=new user({ 
        fname:fname,
        lname:lname,
        gender:gender,
        dob:dob,
        aadhar:aadhar,
        mobile:mobile,
        email:email,
        loginpassword:hashfunction(loginpassword)
    });
    new_student
    .save()
    .then(existinstudent=>{
        if(existinstudent!=null){
            console.log(`student exists as the following ${existinstudent}`);
            res.sendFile(path.join(__dirname,"index.html"));
        }else{
            res.sendFile(path.join(__dirname,"index.html"));
            new_student.save()
            .then(result=>{
                console.log('student added in DB');
            }).catch(err=>{
                console.log(`student not added due to error ${err}`);
            });
        }return existinstudent;
    }).catch(err=>{
        console.log(err);
        res.sendFile(path.join(__dirname,"addform.html"));
    });
})

module.exports=app;


