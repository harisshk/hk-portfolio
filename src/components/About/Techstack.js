import React from "react";
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiCsharp,
  SiAmazonaws,
  SiApollographql,
  SiAzuredevops,
  SiNeo4J,
  SiExpress
} from "react-icons/si";
import IconHolder from "./IconHolder";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <IconHolder title={"Javascript"}>
        <DiJavascript1 />
      </IconHolder>
      <IconHolder title={"NodeJS"}>
        <DiNodejs />
      </IconHolder >
      <IconHolder title={"ExpressJS"}>
        <SiExpress  />
      </IconHolder >
      <IconHolder title={"React"}>
        <DiReact />
      </IconHolder>
      <IconHolder title={"MonogoDB"}>
        <DiMongodb />
      </IconHolder>
      <IconHolder title={"Neo4j"}>
        <SiNeo4J  />
      </IconHolder>
      <IconHolder title={"Apollo GraphQL"}>
        <SiApollographql  />
      </IconHolder>
      <IconHolder title={"Python"}>
        <DiPython />
      </IconHolder>
      <IconHolder title={"AWS"}>
        <SiAmazonaws />
      </IconHolder>
      <IconHolder title={"Azure"}>
        <SiAzuredevops  />
      </IconHolder>
      <IconHolder title={"Git"}>
        <DiGit />
      </IconHolder>
      <IconHolder title={"C#"}>
        <SiCsharp />
      </IconHolder>
      <IconHolder title={"Firebase"}>
        <SiFirebase />
      </IconHolder>
    </Row>
  );
}

export default Techstack;
