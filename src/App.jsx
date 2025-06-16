import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Patterns from "./pages/Patterns"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/patterns" element={<Patterns/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
