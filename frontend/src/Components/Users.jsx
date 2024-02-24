import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Users() {
  let [userss, setUserss] = useState([]);
 
  
  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(res=>setUserss(res.data))
    .catch(error=>console.log(error))
  },[])
  let deleteu=(id)=>{
    axios.delete("http://localhost:3001/delete/"+id)
    .then((ress)=>{
      window.location.reload();
      
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="w-screen h-screen bg-yellow-500 flex relative justify-center items-center">
      <Link className="absolute bottom-5 right-5 bg-purple-500 text-xl text-white px-5 py-2 rounded-sm" to={"/create"}>Add New</Link>
      <div className="w-1/2 overflow-scroll flex flex-col justify-around items-center bg-white h-1/2 rounded-md p-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userss.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`}><button className="bg-blue-600 px-5 py-1 text-white">Edit</button></Link>
                  <button onClick={()=> deleteu(user._id)} className="bg-red-600 ml-3 px-5 py-1 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
