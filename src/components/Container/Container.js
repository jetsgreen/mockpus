import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectCard";
import Wrapper from "../Wrapper/wrapper";
import Title from "../Title/title";
import projects from "./projects.json";


class Container extends Component {
  
  state = {
    projects
  };

  render() {
    return (
      <Wrapper>
        <Title>Project List</Title>
        {this.state.projects.map(project => (
          <ProjectCard
            
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Container;