import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreateUser from "./Components/CreateUser"
import UpdateUser from "./Components/UpdateUser"
import Users from "./Components/Users"

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/create" element={<CreateUser/>}/>
      <Route path="/update/:id" element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
