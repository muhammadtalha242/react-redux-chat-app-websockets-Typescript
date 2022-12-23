import "./App.css";
import { Col, Row } from "antd";

import SideBar from "./components/sidebar";
import Display from "./components/display";
import Input from "./components/input";
import { DisplayInputRowContainer } from "./container";

function App() {
  return (
    <Row>
      <Col span={8}>
        <SideBar />
      </Col>
      <DisplayInputRowContainer span={16}>
        <Display />
        <Input />
      </DisplayInputRowContainer>
    </Row>
  );
}

export default App;
