import React from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import { FaChartBar, FaBook, FaCog, FaComment, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Card className="border-0 shadow-lg">
      <div className="logo mb-4" style={{listStyleType:'none'}}>Logo</div>
      <ListGroup variant="flush">
        <ListGroup.Item className="active-item">
          <FaChartBar /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item>
          <FaBook /> Classes
        </ListGroup.Item>
        <ListGroup.Item>
          <FaCog /> Resources
        </ListGroup.Item>
        <ListGroup.Item>
          <FaBook /> Learning Plan
        </ListGroup.Item>
        <ListGroup.Item className="notification-item">
          <FaComment /> Chat
        </ListGroup.Item>
        <ListGroup.Item>
          <FaCog /> Settings
        </ListGroup.Item>
      </ListGroup>
      <Card className="mt-4 upgrade-card border-0 shadow-sm">
        <Card.Body className="text-center">
          <div className="upgrade-icon"></div>
          <p>
            Upgrade to <strong>PRO</strong> for more resources.
          </p>
          <Button variant="primary">Upgrade</Button>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default Sidebar;
