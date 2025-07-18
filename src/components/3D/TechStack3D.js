import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { 
  DiPython,
  DiGit,
  DiLinux,
  DiDocker,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiNvidia,
  SiFirebase,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";
import "./TechStack3D.css";

const techIcons = [
  { Icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
  { Icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: DiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { Icon: SiNvidia, name: "NVIDIA", color: "#76B900" },
  { Icon: DiPython, name: "Python", color: "#3776AB" },
  { Icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
  { Icon: SiJenkins, name: "Jenkins", color: "#D24939" },
  { Icon: DiGit, name: "Git", color: "#F05032" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
];

function TechStack3D() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-stack-3d-container">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techIcons.map((tech, index) => (
          <Col xs={6} md={3} lg={2} key={index} className="tech-3d-col">
            <Tilt
              className="tech-3d-tilt"
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={1000}
              scale={hoveredIndex === index ? 1.1 : 1}
              transitionSpeed={2500}
              gyroscope={true}
            >
              <div 
                className={`tech-3d-icon ${hoveredIndex === index ? 'hovered' : ''}`}
                style={{ 
                  '--tech-color': tech.color,
                  '--animation-delay': `${index * 0.1}s`,
                  '--float-delay': `${index * 0.2}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="tech-3d-inner">
                  <div className="tech-3d-icon-wrapper">
                    <tech.Icon className="tech-icon" />
                  </div>
                  <div className="tech-3d-glow"></div>
                  <div className="tech-3d-reflection"></div>
                </div>
                <div className="tech-3d-label">
                  <span>{tech.name}</span>
                </div>
                <div className="tech-3d-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`particle particle-${i}`}></div>
                  ))}
                </div>
              </div>
            </Tilt>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TechStack3D;