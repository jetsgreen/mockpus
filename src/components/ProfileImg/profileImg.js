import React,{useEffect, useRef} from "react";
import { gsap } from "gsap"
import "./profile.css"


function ProfileImg() {
  let image = useRef(null);
  let info = useRef(null);

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
      <img className="profile-image" src="https://media-exp1.licdn.com/dms/image/C4D03AQEbSCD7UMuAlw/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=6kwt0JWMsAERL7Qw5Ho-nsXFC-F4mbzkFFTzlhBJuTE" alt="Profile" height="300" width="250"></img>
     
    </div>
  );
}

export default ProfileImg;