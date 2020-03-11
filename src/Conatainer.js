import React, { Component } from "react";
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";


class Container extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Projects</Title>
        {this.state.projects.map(project => (
          <ProjectCard
           
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            demoProject={this.description}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Container;