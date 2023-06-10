 import ig from "../assets/ig.png"
 import git from "../assets/git.png"
 import face from "../assets/face.png"
 


const Footer = () => {
  return (
     <div>
             <footer>
                       <div>
                              <a href="www.instagram.com"><img src={ig} alt="" className="img_footer"/></a>
                              <a href="https://github.com/agustapie01"><img src={git} alt="" className="img_footer"/></a>
                              <a href="https://es-la.facebook.com/"><img src={face} alt="" className="img_footer" /></a>
                       </div>  

            </footer>
    /</div>
    
  )
}

export default Footer