require('dotenv').config();
const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
        });
        console.log("successful connection to db");
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports=connectDB;