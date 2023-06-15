
import  './App.css'
import { Route , Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PropertyDetails from "./Pages/PropertyDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <div >
      
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/property/:id" element={<PropertyDetails/>}/>
     
        
      <Route path="/login" element={<Login />} />
   
      <Route path="/signUp" element={<Register />} />

      </Routes>
   
    
    </div>
  );
}

export default App;
