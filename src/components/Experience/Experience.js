import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { ImPointRight } from "react-icons/im";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          My journey in Cloud DevOps and MLOps Engineering across multiple companies.
        </p>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">NutriLab - MLOps & Deployment Engineer (Intern)</h3>
                  <p className="experience-period">Jul 2025 – Present | Remote, Singapore</p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Advised on ML infrastructure and deployment pipelines
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Supported remote cloud architecture and GPU setup
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Volunteer contribution during personal recovery period
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">Qubrid AI - Cloud Developer</h3>
                  <p className="experience-period">Jun 2023 – Nov 2024 | Remote, US</p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Built SaaS platform for AI compute with GPU provisioning (H100, A100, V100)
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Integrated GenAI models: Mistral, Gemma, Stable Diffusion, Phi-3, Code LLama, Shap-e
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Deployed models on Google Cloud Run and AWS SageMaker
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Automated EC2 control using Boto3 (start, stop, resume)
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Configured serverless Kubernetes with high-end GPU integrations
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Built usage dashboards and cost tracking for transparent budgeting
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Ran quantum simulations using AWS Braket with simulators and real QPUs
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">ePaisa - Junior DevOps Engineer</h3>
                  <p className="experience-period">Feb 2022 – Nov 2022 | Remote, Mumbai</p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Created EKS clusters with Helm, CloudFormation, ECR, S3, and VPC setup
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Deployed Flutter/web apps using Jenkins CI/CD and ECS Fargate
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Migrated infrastructure from GCP to AWS with minimal downtime
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Managed production LAMP stack, optimized NGINX with SSL and RBAC
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Monitored apps via CloudWatch; fixed session stickiness and pod issues
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Managed Firebase for mobile/web auth and real-time data sync
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">Freelance - Cloud DevOps Engineer</h3>
                  <p className="experience-period">Sep 2019 – Feb 2022 | Singapore</p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Managed AWS and GCP resources for startups and internal teams
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Deployed Kubernetes clusters; automated pipelines via Jenkins and Terraform
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Reduced infrastructure costs by 30% via cloud migration and auto-scaling
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Provided 24/7 cloud operations and deployment support
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">Education</h3>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> <strong>B.E. in Electronics & Communication</strong> - Kumaraguru College of Technology, Anna University (2017)
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>Diploma in ECE</strong> - DOTE, Tamil Nadu (GPA: 9.1, 2014)
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>HSC</strong> - SRGDS Matric Hr. Sec School, Tiruvannamalai (2011)
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="experience-card">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <h3 className="purple">Contact Information</h3>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> <strong>Address:</strong> 596 Nehru Nagar Vengikkal, Tiruvannamalai, Tamil Nadu, India 606604
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>Phone:</strong> +91-9629250300
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>Email:</strong> shathisharch@gmail.com
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shathish-warma-s/" target="_blank" rel="noopener noreferrer" className="purple">linkedin.com/in/shathish-warma-s/</a>
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> <strong>GitHub:</strong> <a href="https://github.com/shathishwarmas" target="_blank" rel="noopener noreferrer" className="purple">github.com/shathishwarmas</a>
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;