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
import { useEffect, useState } from "react";

const Messenger = () => {
  const users = ["615e0eaeb152175f1447b54d", "615e0efcb152175f1447b54f"];
  const [convo, setConvo] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getConvo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/convos/${users[1]}`
        );
        const res = await response.json();
        console.log(res);
        setConvo(res);
      } catch (error) {
        console.log(error);
      }
    };
    getConvo();
  }, []);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/messages/${currentChat._id}`
        );
        const res = await response.json();
        setMessages(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(messages);

  return (
    <Container>
      <Row>
        <Col sm={3}>
          <FormControl />
          {convo.map((convos) => (
            <div key={convos._id} onClick={() => setCurrentChat(convos)}>
              <Convo convo={convos} users={users[1]} />
            </div>
          ))}
        </Col>
        <Col sm={6} className="d-flex flex-column justify-content-between">
          <Col className="chatbox">
            {currentChat ? (
              <>
                {messages?.map((message) => (
                  <Chatbox
                    message={message}
                    own={message.sender === users[1] && message.sender}
                  />
                ))}
              </>
            ) : (
              <div>Open a new chat!💬</div>
            )}
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
