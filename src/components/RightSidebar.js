import React from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";

const RightSidebar = () => {
  return (
    <div className="right-sidebar shadow-lg p-3">
      <Card className="profile-card text-center mb-4 border-0">
        <Card.Body>
          <div className="profile-pic"></div>
          <h6>Anna Morrison</h6>
          <p>Student</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              English <ProgressBar now={80} />
            </ListGroup.Item>
            <ListGroup.Item>
              Spanish <ProgressBar now={60} />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <h6>Reminders</h6>
      <ListGroup variant="flush">
        <ListGroup.Item>Eng - Vocabulary test</ListGroup.Item>
        <ListGroup.Item>Eng - Send grammar homework</ListGroup.Item>
        <ListGroup.Item>Spanish - Send essay</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSidebar;
