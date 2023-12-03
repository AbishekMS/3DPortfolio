import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
//import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import Home from './pages/Home'
import LandingPage from './FirstPage/LandingPage'

const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
        <Router>
         <Routes>
         <Route path="/" element={<LandingPage/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/projects" element={<Projects/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
        </Router>
    </main>
  )
}

export default App