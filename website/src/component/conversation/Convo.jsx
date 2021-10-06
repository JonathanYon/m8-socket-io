import { Col } from "react-bootstrap";
import "./convo.css";

const Convo = () => {
  return (
    <Col className="active-user mt-3">
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLQTeCYbmH7clItamsqvMzEOxFEk-dwX7MswPapaUw=s900-c-k-c0x00ffffff-no-rj"
        alt=""
        style={{ width: "50px", height: "50px" }}
        className="rounded-circle mr-3"
      />
      <span>Dinu</span>
    </Col>
  );
};
export default Convo;
