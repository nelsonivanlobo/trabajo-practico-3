/* eslint-disable react/prop-types */

// import autito from "../assets/autogta.jpg"
// import fitito from "../assets/autito2.jpg"
// import siena from "../assets/autito3.jpg"


const Main = ({alumno}) => {
  
  console.log(alumno)
  return (
    <>

          <main>
            
            <div className="card_main">
                  <div className="card text-center">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{alumno.nombre} {alumno.apellido}</h1>
                      <p className="card-text">Soy Estudiante {alumno.estudio} tengo {alumno.edad} años y soy jugador de {alumno.deporte}</p>
                      
                    </div>
                  </div>
            </div>

          </main>
    </>
  )
}

export default Main