import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function FriendCard(props) {
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
            <strong>Github:</strong> <Link>{props.github}</Link>
          </li>
          
        </ul>
      </div>
      <button onClick={() => props.demoProject(props.demo)} className="btn btn-primary">
        Demo
      </button>
    </div>
  );
}

export default FriendCard;
