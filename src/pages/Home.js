import React, { useEffect, useRef } from "react";
import {Col, Row} from "../components/Grid/grid"
import HomeImage from "../components/HomeImage/homeImage"
import { gsap } from "gsap"

function Home  ()  {
    let info = useRef(null);
    let home = useRef(null);
    let button = useRef(null);

    useEffect(() => {
  
      gsap.from(info, 2, {
        delay: 0.8,
        ease: "bounce3.out",
        duration: 2.5,
        fade: .9,
        opacity: 0,
        x: 65,
  
      })
  
    }, [info])
    

    useEffect(() => {
  
      gsap.from(home, 2, {
        delay: 0.8,
        ease: "power3.out",
        duration: 2.5,
        fade: .9,
        opacity: 0,
        y: 65,
  
      })
  
    }, [home])

    useEffect(() => {
  
        gsap.from(button, 2, {
          delay: 0.8,
          ease: "power3.out",
          duration: 2.5,
          fade: .9,
          opacity: 0,
          x: 65,
    
        })
    
      }, [button])
  
    return (
        <div className="inner" id="home">
            <h1 ref={el => home = el} className="header">Home Page</h1>
            <div className="home-div">
            <p ref={el => info = el}className="info">
                Dedicated Software Engineer with experience in both front-end and back-end development. Strong
                              creative and analytical skills. Team player with an eye for detail. Javascript, Node.js, MySQL,
                              MongoDB, React.js and Jquery to mention a few technologies.
                              
      </p>
      <a href="http://localhost:3000/portfolio"><button ref={el => button = el} className="btn btn-info" id="btn-portfolio">Portfolio</button></a>
      </div>
      <Row>
          <HomeImage/>
      </Row>
     
        </div>
       

    );
}

export default Home;