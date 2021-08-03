import Aos from "aos";
import { useEffect } from "react"
import "aos/dist/aos.css"

function Banner() {
    useEffect(()=>{
        Aos.init({duration:1000});
      },[]);
    return (
        <header className="banner">
        
    
        <div className = "banner__content">
             <h1 className = "banner__title" data-aos="fade-up">
             Pawan Kumar<br/><h6 className = "dis">Software Engineer</h6>
             </h1>
             
        </div>
        <div className = "banner__fadeBottom"/>
    </header>
    )
}

export default Banner
