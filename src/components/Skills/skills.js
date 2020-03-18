import React,{useRef, useEffect} from "react";
import "./skills.css"
import {gsap} from "gsap"

function Skills() {
    let skills = useRef(null);

    useEffect(() => {

        gsap.from(skills, 1.5, {
          delay: 0.8,
          ease: "bounce3.out",
          duration: 2.5,
          fade: .9,
          opacity: 0,
          y: 65,
    
        })
    
      }, [skills])

    return (
        <div ref={el => skills = el} className="skills" >
            <div>
                <h2>Skills & Experience</h2>
                <br></br>
                <ul>

                    <p>I have experience in both front and back end development.</p>

                </ul>
            </div>
            <div>
                <p>
                    <ul>
                        HTML, CSS, Javascript, JQuery, Node.js, Express.js, MySQL, MongoDB, React.js, Github, Heroku. 
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Skills;