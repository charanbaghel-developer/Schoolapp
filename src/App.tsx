


import Abouts from "./abouts";
import BClass from "./BClass";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Team from "./team";
import Home from "./Home";
import Footer from "./components/Footer";
function App() {
  
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/about" element={<Abouts />} />
       <Route path="/BClass" element={<BClass/>}/>
        <Route path="/contact" element={<Contact/>} />
         <Route path="/team" element={<Team/>} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
