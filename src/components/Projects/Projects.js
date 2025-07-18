import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard3D from "../3D/ProjectCard3D";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">MLOps & Cloud Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some key MLOps and cloud infrastructure projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={chatify}
              isBlog={false}
              title="GenAI SaaS Platform - Qubrid AI"
              description="Built SaaS platform for AI compute with GPU provisioning (H100, A100, V100). Integrated GenAI models like Mistral, Gemma, Stable Diffusion, and Hugging Face transformers. Deployed on Google Cloud Run and AWS SageMaker with automated scaling and cost tracking."
              ghLink="https://github.com/shathishwarmas"
              demoLink="https://shathishwarmas.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={bitsOfCode}
              isBlog={false}
              title="MLOps Pipeline with GPU Orchestration"
              description="Automated ML model training, inference, and monitoring pipelines using AWS SageMaker, EKS, and custom GPU clusters. Implemented model versioning, A/B testing, and automated retraining. Reduced model deployment time from days to minutes with 99.9% uptime."
              ghLink="https://github.com/shathishwarmas"
              demoLink="https://shathishwarmas.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={editor}
              isBlog={false}
              title="AWS Quantum Computing with Braket"
              description="Ran quantum simulations using AWS Braket with both simulators and real QPUs. Built quantum-classical hybrid workflows, implemented quantum algorithms, and integrated with classical ML pipelines. Explored quantum advantage for optimization problems."
              ghLink="https://github.com/shathishwarmas"
              demoLink="https://shathishwarmas.github.io/Portfolio/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={leaf}
              isBlog={false}
              title="Multi-Cloud EKS/GKE Migration"
              description="Migrated infrastructure from GCP to AWS with minimal downtime at ePaisa. Created EKS clusters with Helm, CloudFormation, ECR, and S3 integration. Deployed Flutter/web applications using Jenkins CI/CD and ECS Fargate with zero-downtime deployments."
              ghLink="https://github.com/shathishwarmas"
              demoLink="https://shathishwarmas.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={suicide}
              isBlog={false}
              title="Automated EC2 Lifecycle Management"
              description="Built automated EC2 instance control using Boto3 for start, stop, and resume operations. Implemented cost optimization strategies with auto-scaling, spot instances, and usage dashboards. Achieved 30% cost reduction while maintaining performance."
              ghLink="https://github.com/shathishwarmas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard3D
              imgPath={emotion}
              isBlog={false}
              title="Production LAMP Stack with Monitoring"
              description="Managed production LAMP stack with optimized NGINX configuration, SSL/TLS, and RBAC implementation. Set up comprehensive monitoring with CloudWatch, Datadog, and custom dashboards. Fixed session stickiness issues and improved application performance by 40%."
              ghLink="https://github.com/shathishwarmas"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
