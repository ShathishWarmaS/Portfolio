import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud DevOps Engineer",
          "MLOps Engineer",
          "GenAI Infrastructure Specialist",
          "AWS & GCP Cloud Architect",
          "Kubernetes & GPU Orchestration Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
