import React from "react";




export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }

  export function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  
    return (
      <div className={size}>
        {props.children}
      </div>
    );
  }