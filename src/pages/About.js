import React, { useEffect, useRef } from "react";
import { Col, Row } from "../components/Grid/grid"
import ProfileImg from "../components/ProfileImg/profileImg"
import { gsap } from "gsap"
import Skills from "../components/Skills/skills"


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
       Hi, I'm Felix Fernandez<br></br> I currently own a limosine servive and have so for the past 4 years.  Prior to that I was in 
       a Financial Specialist for PNC Bank.  I was in the banking industry for over 13 years. The past years I've develped a passion for 
       computer programming unlike anything else I've done before.  I truly feel like I found my calling.  I'm a very hard worker and super
       fast learner, and I'm willing to put in the hours to achieve any task.
        </p>
        </Col>
        
        </Row>
        <Row>
          <Skills/>
        </Row>
        <div>

        </div>
      </div>
     
    </div>
   
  );
}

export default About;