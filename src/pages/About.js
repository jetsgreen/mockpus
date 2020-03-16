import React, { useEffect, useRef } from "react";
import { Col, Row } from "../components/Grid/grid"
import ProfileImg from "../components/ProfileImg/profileImg"
import { gsap } from "gsap"
import Footer from "../components/Footer/footer"

function About() {
  let info = useRef(null);
  let about = useRef(null);

  useEffect(() => {

    gsap.from(info, 1.5, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      x: 65,

    })

  }, [info])

  useEffect(() => {

    gsap.from(about, 1.5, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      y: 65,

    })

  }, [about])

  return (
    <div className="inner" id="about">
      <div>
        <h1 className="header" ref={el => about = el}>About Me</h1>
      </div>
      <div>
        <Row>
        <Col size="md-6">
          <ProfileImg/>
          </Col>
        <Col size="md-6">
        <p className="info"ref={el => info = el}>
       Hello
        </p>
        </Col>
        
        </Row>
        <div>

        </div>
      </div>
      <Footer/>
    </div>
   
  );
}

export default About;