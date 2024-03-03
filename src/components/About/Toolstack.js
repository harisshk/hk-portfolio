import React from "react";
import { Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAmazonaws,
  SiXcode,
  SiSwagger,
  SiOpenai,
  SiJira,
  SiSlack 
} from "react-icons/si";
import IconHolder from "./IconHolder";
import { IoLogoFigma } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <IconHolder title={"Linux"}>
        <SiLinux />
      </IconHolder >
      <IconHolder title={"VS Code"}>
        <SiVisualstudiocode />
      </IconHolder>
      <IconHolder title={"Swagger"}>
        <SiSwagger  />
      </IconHolder>
      <IconHolder title={"Xcode"}>
        <SiXcode />
      </IconHolder>
      <IconHolder title={"AWS"}>
        <SiAmazonaws />
      </IconHolder>
      <IconHolder title={"Postman"}>
        <SiPostman />
      </IconHolder>
      <IconHolder title={"OpenAI"}>
        <SiOpenai  />
      </IconHolder>
      <IconHolder title={"Figma"}>
        <IoLogoFigma  />
      </IconHolder>
      <IconHolder title={"Heroku"}>
        <SiHeroku />
      </IconHolder>
      <IconHolder title={"Jira"}>
        <SiJira  />
      </IconHolder>
      <IconHolder title={"Slack"}>
        <SiSlack   />
      </IconHolder>
    </Row>
  );
}

export default Toolstack;
