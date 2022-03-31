import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecom from "../../Assets/Projects/ecom2.png";
import social from "../../Assets/Projects/social.png";
import propy from "../../Assets/Projects/propy.png";
import register from "../../Assets/Projects/register.png";
import jurni from "../../Assets/Projects/jurni.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Fitness & Social Media Admin App"
              description="Admin to manage the social media fitness app build with react.js, Material-UI, and Firebase analytics. Have features which allows admin to block posts, users and onboard coaches (a role in this app)."
              link="https://admin.myjurni.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Admin"
              description="E-Commerce admin to manage the products build with react.js, Material-UI, and Firebase. Have features to add and manage products, manage orders and shipping with Shipstation."
              link="https://organizemeadmin.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={propy}
              isBlog={false}
              title="Property Management"
              description="Web app to manage the properties build with react.js, Prime-UI, and Firebase Push Notifications. Have features to add and manage properties, Support system for both tenant and the house owner. Integrated Razorpay for rent payment."
              link="https://dashboard.abmsapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jurni}
              isBlog={false}
              title="Fitness & Social Media App"
              description="An IOS app built with React Native. Managing the app by developing small features and resolving bugs. Had an experience for pushing an IOS app to App store"
              link="https://apps.apple.com/in/app/jurni/id1580909228"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={register}
              isBlog={false}
              title="Warranty Registration"
              description="Warranty registration page for an E-Commerce company."
              link="https://register.audyglobal.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
