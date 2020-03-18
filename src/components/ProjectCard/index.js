import React from "react";
import "./style.css";


function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name} 
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <a className="navbar-brand" href={props.github} target="_blank" onClick={()=> props.handleClick(props.github)}><button className="btn btn-info">Github</button></a>
          <div>
         <a className="navbar-brand" href={props.demo} target="_blank" onClick={()=> props.handleClick(props.demo)}>Click here to Demo</a>
          </div>
          
        </ul>
      </div>
    
    </div>
  );
}

export default ProjectCard;
