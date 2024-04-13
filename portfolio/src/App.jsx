import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'

function App() {

  return (
  
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />}></Route>
    </Routes>
    </BrowserRouter>
    // <Navbar />     
    
    
  )
}

export default App
