import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard" >
      <Row>
        <Col xs={2} style={{height:'100%'}}>
          <Sidebar />
        </Col>
        <Col xs={8}>
          <MainContent />
        </Col>
        <Col xs={2}>
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
