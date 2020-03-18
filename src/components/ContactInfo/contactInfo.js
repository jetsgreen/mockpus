import React, { useEffect, useRef } from "react";
import "./contactInfo.css"
import { gsap } from "gsap"


function ContactInfo() {
    let con = useRef(null);
     useEffect(() => {

    gsap.from(con, 1.5, {
      delay: 0.8,
      ease: "power3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      x: 65,

    })

  }, [con])
  

  return (
    <div id="contact-div" ref={el => con = el}>
            <p id="phone-number"><a href="tel:973-896-9924">Cellphone: (973) 896-9924</a></p>
            <p id="email"><a
              href="mailto:fernandezfelix460@gmail.com? subject=subject text">fernandezfelix460@gmail.com</a>
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/felix-fernandez-660117167/" target="_blank" id="linkedIn"><i
                className="fab fa-linkedin"></i></a>

              <a href="https://github.com/jetsgreen" target="_blank" id="git"><i
                className="fab fa-github"></i></a>
            </div>
          </div>
  );
}

export default ContactInfo;