import React, { useEffect, useRef } from "react";
import { Col, Row } from "../components/Grid/grid"
import ContactInfo from "../components/ContactInfo/contactInfo"
import { gsap } from "gsap"
import Footer from "../components/Footer/footer"



function Contact() {
  let contact = useRef(null);
  let info = useRef(null);
 

  useEffect(() => {

    gsap.from(contact, 2, {
      delay: 0.8,
      ease: "bounce3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      x: 65,

    })

  }, [contact])


  useEffect(() => {

    gsap.from(info, 2, {
      delay: 0.8,
      ease: "power3.out",
      duration: 2.5,
      fade: .9,
      opacity: 0,
      y: 65,

    })

  }, [info])

 


  return (
    <div className="inner" id="contact">
      <h1 className="header" ref={el => contact = el}>Contact</h1>

      <Row>

        <Col size="md-6">

          <div className="info" id="mail" ref={el => info = el}>
           
          <h1 id="connect">Let's Connect!</h1>
          <p>Don't Hesitate to Call or Email</p>

     
          </div>
        </Col>
        <Col size="md-6" >
          <ContactInfo />
        </Col>
      </Row>
     <Footer/>
    </div>

  );
}

export default Contact;