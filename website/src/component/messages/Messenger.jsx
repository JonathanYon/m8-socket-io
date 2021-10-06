import "./messenger.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import Convo from "../conversation/Convo";
import Chatbox from "../chat/Chatbox";
import Online from "../chatOnline/Online";

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
        <Col sm={6} className="d-flex flex-column justify-content-between">
          <Col className="chatbox">
            <Chatbox />
            <Chatbox own={true} />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox own={true} />
            <Chatbox />
            <Chatbox />
            <Chatbox own={true} />
            <Chatbox />
            <Chatbox />
          </Col>
          <Col>
            <Form>
              <Form.Control as="textarea" rows={3} />
              <Button className="mt-1">Send</Button>
            </Form>
          </Col>
        </Col>
        <Col sm={3}>
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
        </Col>
      </Row>
    </Container>
  );
};
export default Messenger;
