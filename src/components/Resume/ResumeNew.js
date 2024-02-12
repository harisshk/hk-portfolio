import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { firebaseAnalytics } from "../../analytics/firebase";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
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
            <Page pageNumber={1} width={width - width*5/10} />
            <Page pageNumber={2} width={width - width*5/10} />
          </Document>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
