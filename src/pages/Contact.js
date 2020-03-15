import React, { useEffect, useRef } from "react";
import { Col, Row } from "../components/Grid/grid"
import ContactInfo from "../components/ContactInfo/contactInfo"
import { gsap } from "gsap"


function Contact() {

  let contact = useRef(null);
  let info = useRef(null);
  let con = useRef(null);

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

          <div>
            <p className="info" id="mail" ref={el => info = el}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
                ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
                elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
        </p>
          </div>
        </Col>
        <Col size="md-6" >
          <ContactInfo />
        </Col>
      </Row>
    </div>

  );
}

export default Contact;