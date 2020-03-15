import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"
import "./home.css"


function HomeImage() {
  let image = useRef(null);

  useEffect(() => {

    gsap.from(image, 2, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      y: 65,

    })

  }, [image])


  return (
    <div ref={el => image = el} >
      <img className="home-image" src="./images/home.png" alt="Code" height="300" width="340"></img>
      <p className="img-p">"Just eager to code"</p>
    </div>
  );
}

export default HomeImage;