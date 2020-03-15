import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
          <li>
          <Link><a className="navbar-brand" href={props.github} target="_blank"><button className="btn btn-info">Github</button></a></Link>
          </li>
          <div>
          <Link><a className="navbar-brand" href={props.demo} target="_blank" onClick={()=> props.handleClick(props.demo)}>Click here to Demo</a></Link>
          </div>
          
        </ul>
      </div>
    
    </div>
  );
}

export default ProjectCard;
