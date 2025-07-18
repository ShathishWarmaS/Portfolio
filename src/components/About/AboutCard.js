import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shathish Warma S </span>
            from <span className="purple"> Tiruvannamalai, Tamil Nadu, India.</span>
            <br />I am a Cloud DevOps and MLOps Engineer with nearly 3 years of experience deploying and managing scalable, 
            high-performance cloud infrastructure on AWS and GCP. I have a solid understanding of UNIX/Linux internals, 
            computer networking (TCP/IP), and extensive experience with container orchestration using Kubernetes (EKS and GKE).
            <br />
            <br />
            I specialize in serverless Kubernetes configurations with high-end GPU integrations (NVIDIA H100, A100, V100, L40s, L4, A10, T4) 
            and have built end-to-end SaaS platforms integrating advanced GenAI model deployment, inference, and cost-effective cloud resource management.
            <br />
            <br />
            Apart from building intelligent AI/ML infrastructure, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Deploying GenAI models (Mistral, Gemma, Stable Diffusion)
            </li>
            <li className="about-activity">
              <ImPointRight /> Building MLOps pipelines with SageMaker & Cloud Run
            </li>
            <li className="about-activity">
              <ImPointRight /> GPU orchestration with H100, A100, V100 clusters
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring quantum computing with AWS Braket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent infrastructure that powers the future of AI!"{" "}
          </p>
          <footer className="blockquote-footer">Shathish Warma S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
