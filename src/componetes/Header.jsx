
 import { Link } from 'react-router-dom';
import nelson from '../assets/nelson.jpg'

export const Header = () => {
  return (
    <>

         <header>
                  <div className="Logo_header">
                         <img src={nelson} alt="" className='img_logo' />
                         <h2 className="nombre_portfolio">Mi Portfolio</h2>
                  </div>

                  <nav>
                        <Link to="/" className='link'>Inicio</Link>
                        <Link to="/componetes/Contact" className='link'>Contacto</Link>
                        <Link to="/componetes/About" className='link'>About</Link>
                  </nav>
          
        </header>     
        


            
              
            

    </>
  )
}

export default Header   