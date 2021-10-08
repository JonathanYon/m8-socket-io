import { Col, Row } from "react-bootstrap";
import "./chatbox.css";
import { format } from "timeago.js";

const Chatbox = ({ message, own }) => {
  console.log(own);
  return (
    // <Container>
    <Row className="d-flex flex-column mt-2 ">
      <Col
        className={
          own ? "d-flex justify-content-end" : "d-flex justify-content-start"
        }
      >
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLQTeCYbmH7clItamsqvMzEOxFEk-dwX7MswPapaUw=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          style={{ width: "50px", height: "50px" }}
          className="rounded-circle mr-3"
        />
        <p
          className={own ? "bg-light rounded px-3" : "bg-primary rounded px-3"}
          style={{ maxWidth: "50%" }}
        >
          {message.text}
        </p>
      </Col>
      <Col className="">{format(message.createdAt)}</Col>
    </Row>
    // <Row></Row>
    // </Container>
  );
};
export default Chatbox;
