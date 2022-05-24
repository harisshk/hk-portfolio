import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { firebaseAnalytics } from "../../analytics/firebase";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/harisshk/hk-portfolio/blob/development/src/Assets/resume.pdf";

function ResumeNew() {
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
  console.log(width)
  useEffect(() => {
    firebaseAnalytics.logEvent("RESUME_PAGE");
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button style={{ width: "50%", marginBottom: "5vh" }} variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <div style={{ display: "flex", justifyContent: "center", position: "relative", padding: "0 10vh" }}>
          <Document file={pdf} >
            <Page pageNumber={1} width={width - 100} />
          </Document>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
