
import React, {useEffect, useRef} from 'react'
import {gsap} from "gsap"
import Header from "../components/Header/header"

const  About = () => {
  let paragraph = useRef(null);

  useEffect(() =>{
    
    gsap.from(paragraph, 0.8,{
    delay:0.8,
    ease: "fade3.in",
    x: 64,
    stagger: {
        amount: 0.15
    }
    
    })
    }, paragraph)

  return (
    <div className="inner">
    <Header lineContent="About Me"/>
    <div>
      <p  ref= {el=> paragraph =el}className="info">
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
    </div>
  );
}

export default About;