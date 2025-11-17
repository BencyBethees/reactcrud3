import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Addevents from './pages/Addevents'



function App() {


  return (
    <>
    <Header/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/events' element={<Events/>}/>
     <Route path='/addevents' element={<Addevents/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
