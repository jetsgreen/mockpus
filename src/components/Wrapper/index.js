import React, { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap"

function Wrapper(props) {
  let wrapper = useRef(null);

  useEffect(() => {

    gsap.from(wrapper, 1.5, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      y: 65,

    })

  }, [wrapper])

  return <div ref={el => wrapper = el} className="wrapper">{props.children}</div>;
}

export default Wrapper;
