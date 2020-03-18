import React, { Component } from "react";
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";


class Container extends Component {
 
  state = {
    projects
  };
  handleClick = (e) => {
    console.log(e);
  };

  
  render() {
    return (
      <Wrapper>
        <Title>My Recent Work</Title>
        {this.state.projects.map(project => (
          <ProjectCard
           
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            demo={project.demo}
            handleClick={this.handleClick}
            
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default Container;