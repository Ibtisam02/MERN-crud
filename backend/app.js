const express=require("express");
const mongoose=require("mongoose")
const cors = require('cors');
let UserModel=require("./modles/Users")

let port=3001;
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(ress=>res.json(ress))
    .catch(error=>res.json(error))
})
app.get("/getuser/:id",(req,res)=>{
    let id=req.params.id;
    UserModel.findById({_id:id})
    .then(ress=>res.json(ress))
    .catch(error=>res.json(error))
})
app.put("/updateuser/:id",(req,res)=>{
    let id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(ress=>res.json(ress))
    .catch(error=>res.json(error))
})

app.delete("/delete/:id",(req,res)=>{
    id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(ress=>res.send(ress))
    .catch(error=>res.send(error))
})

app.listen(port,()=>{
    console.log(`server is listning to port number ${port}`)
})