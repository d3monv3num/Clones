const express=require('express')
const path=require('path')
const {getDB}=require('./database');
const bodyparse=require('body-parser')
const user=require('./usermodel');
const hashfunction=require('./hashfuntionmodel').hashfunction;
const router=express.Router()

// bodyparser to take input from forms
router.use(bodyparse.urlencoded({extended:true}));


// taking details from login and password and using them to find user 
router.post('/index.html',(req,res,next)=>{
    const userid=req.body.userID;
    const password=hashfunction(req.body.password);
            console.log(userid,password);
            const validatestudent=user.find({fname:userid,loginpassword:password})
            .then(studentrecord=>{
                console.log(studentrecord);
                if(studentrecord.length==0){
                    res.sendFile(path.join(__dirname,'login.html'));
                }else{
                    console.log(`loginroute is now working`);
                    res.sendFile(path.join(__dirname,'index.html'))//user found and is student
                }
                }
            )
            .catch(err=>{
                console.log(err);
                res.sendFile(path.join(__dirname,'login.html'));
            })
});

module.exports=router