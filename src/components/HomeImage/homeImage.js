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
      <img className="home-image" src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Code" height="280" width="300"></img>
      <p className="img-p">This Portfolio was built with React.js</p>
    </div>
  );
}

export default HomeImage;