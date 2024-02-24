let mongoose=require("mongoose");

let UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

let UserModel=mongoose.model("users",UserSchema);
module.exports=UserModel;