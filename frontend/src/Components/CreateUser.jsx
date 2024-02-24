import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
function CreateUser() {
  let navigate=useNavigate()
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [age,setAge]=useState("");
  let submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(users=>{
    navigate("/");
    })
    .catch(error=>console.log(error));
      setEmail("");
      setAge("");
      setName("");
  }
  return (
    <div className="w-screen h-screen flex  justify-center items-center bg-yellow-500">
      <form onSubmit={submit} className="  w-1/4 h-1/2 flex-col px-6 gap-y-5 bg-white flex justify-center items-center">
        <h1 className="text-2xl font-medium">Create User</h1>
        <div className="flex justify-between items-baseline gap-3">
          <label htmlFor="t1">Name:</label>
          <input
            id="t1"
            type="text"
            className="border-b border-black h-9 bg-transparent outline-none w-full"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div className="flex justify-between items-baseline gap-3">
          <label htmlFor="t2">Email:</label>
          <input
            id="t2"
            type="Email"
            className="border-b border-black h-9 bg-transparent outline-none w-full"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="flex justify-between items-baseline gap-3">
          <label htmlFor="t3">Age:</label>
          <input
            id="t3"
            type="text"
            className="border-b border-black h-9 bg-transparent outline-none w-full"
            value={age}
            onChange={(e)=>{setAge(e.target.value)}}
          />
        </div>

        <input
          type="submit"
          value="Add"
          className="px-5 py-2 bg-green-500 text-white cursor-pointer"
        />
      </form>
    </div>
  );
}

export default CreateUser;
