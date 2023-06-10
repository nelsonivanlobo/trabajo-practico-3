import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contacto from "./pages/Contacto";
import AboutCv from "./pages/AboutCv"



export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/componetes/Contact" element={<Contacto/>} />
            <Route path="/componetes/About" element ={<AboutCv/>}/>
            
      </Routes>
    </BrowserRouter>

    
  )
}

export default App


