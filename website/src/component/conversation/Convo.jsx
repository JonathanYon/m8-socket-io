import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "./convo.css";

const Convo = ({ convo, users }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friends = convo.members.find((me) => me !== users._id);
    const getUser = async () => {
      try {
        const response = await fetch(`http://localhost:3003/users/${friends}`);
        const res = await response.json();
        // console.log(res);
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [convo, users]);
  return (
    <Col className="active-user mt-3">
      <img
        src={user && user.avatar} //"https://yt3.ggpht.com/ytc/AKedOLQTeCYbmH7clItamsqvMzEOxFEk-dwX7MswPapaUw=s900-c-k-c0x00ffffff-no-rj"
        alt=""
        style={{ width: "50px", height: "50px" }}
        className="rounded-circle mr-3"
      />
      <span>{user && user.name}</span>
    </Col>
  );
};
export default Convo;
