import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import "./ProjectCard3D.css";

function ProjectCard3D(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      className="project-card-3d-container"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={isHovered ? 1.02 : 1}
      transitionSpeed={2500}
      gyroscope={true}
    >
      <Card 
        className="project-card-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-card-3d-image">
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            className="project-image"
          />
          <div className="project-card-3d-overlay">
            <div className="project-card-3d-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`overlay-particle particle-${i}`}></div>
              ))}
            </div>
          </div>
        </div>
        
        <Card.Body className="project-card-3d-body">
          <Card.Title className="project-card-3d-title">
            {props.title}
          </Card.Title>
          <Card.Text className="project-card-3d-description">
            {props.description}
          </Card.Text>
          
          <div className="project-card-3d-buttons">
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="project-btn-3d"
            >
              <BsGithub className="btn-icon" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            
            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-primary"
                href={props.demoLink}
                target="_blank"
                className="project-btn-3d demo-btn"
              >
                <BsBoxArrowUpRight className="btn-icon" />
                Demo
              </Button>
            )}
          </div>
        </Card.Body>
        
        <div className="project-card-3d-glow"></div>
        <div className="project-card-3d-reflection"></div>
      </Card>
    </Tilt>
  );
}

export default ProjectCard3D;