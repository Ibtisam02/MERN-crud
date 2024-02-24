import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  let {id}=useParams()
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [age,setAge]=useState("");
  let navigate=useNavigate();

  useEffect(()=>{
      axios.get("http://localhost:3001/getuser/"+id)
      .then(res=>{
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
      })
      .catch(error=>console.log(error))
  },[])

  let update=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/updateuser/"+id,{name,email,age})
    .then((ress)=> {
      console.log(ress)
      navigate("/")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='w-screen h-screen flex  justify-center items-center bg-yellow-500'>
      <form onSubmit={update} className='  w-1/4 h-1/2 flex-col px-6 gap-y-5 bg-white flex justify-center items-center'>
      <h1 className="text-2xl font-medium">Update User</h1>
        <input value={name} onChange={(e=>setName(e.target.value))} type="text" placeholder='Name' className='border-b border-black h-9 bg-transparent outline-none w-full' />
        <input value={email} onChange={(e=>setEmail(e.target.value))} type="text" placeholder='Email' className='border-b border-black h-9 bg-transparent outline-none w-full' />
        <input value={age} onChange={(e=>setAge(e.target.value))} type="text" placeholder='Age' className='border-b border-black h-9 bg-transparent outline-none w-full' />
        <input type="submit" value="Update" className='px-5 py-2 bg-green-500 text-white cursor-pointer' />
      </form>
    </div>
  )
}

export default UpdateUser