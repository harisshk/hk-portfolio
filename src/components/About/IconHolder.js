import { Col } from "react-bootstrap";

const IconHolder = (props) => {
    return (
      <Col xs={4} md={2}>
        <div className="tech-icons">{props.children}</div>
        <p>{props.title}</p>
      </Col>
    );
  };
  
  export default IconHolder;