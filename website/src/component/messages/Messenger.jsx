import "./messenger.css";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import Convo from "../conversation/Convo";

const Messenger = () => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <FormControl />
          <Convo />
          <Convo />
          <Convo />
          <Convo />
        </Col>
        <Col sm={6}>Hello</Col>
        <Col sm={3}>Hi</Col>
      </Row>
    </Container>
  );
};
export default Messenger;
