import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "200px", 
        backgroundColor: "rgba(255, 255, 255, 0.1)", 
        borderRadius: "10px", 
        color: "white",
        fontSize: "18px"
      }}>
        <p>GitHub Activity Calendar - Visit my <a href="https://github.com/shathishwarmas" target="_blank" rel="noopener noreferrer" style={{ color: "#c084f5" }}>GitHub Profile</a></p>
      </div>
    </Row>
  );
}

export default Github;
