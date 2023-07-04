const getDB=require('./database').getDB;
const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const hashfunction=require('./hashfuntionmodel').hashfunction;


const Schema=mongoose.Schema;
const userSchema=new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    loginpassword:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('user',userSchema);