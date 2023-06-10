import Header from "../componetes/Header"
import Main from "../componetes/Main"
import Footer from "../componetes/Footer"




export const Home = () => {
  
  const nombre = "Nelson Lobo"
  const facultad = "universidad tecnologica de san miguel de tucuman"
  const lenguajes = "c#, react ,js ,html ,css"

  const alumno={nombre: "Nelson Ivan", apellido:"Lobo",legajo:55945,dni:40532283,celular:12345,hobby:"Soy tecnico agronomo", edad:25, deporte:"futbol", trabajo:"Encargado", estudio:"De programacion en la Facultad tecnologica Frt San Miguel de Tucuman"}


  

  return (
    <>
        <Header/>
        <Main nombre={nombre} facultad={facultad} lenguajes ={lenguajes} alumno={alumno}/>
        <Footer/>
        
    </>
  )
}

export default Home