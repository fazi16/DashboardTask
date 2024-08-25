import React from "react";
import {
  Card,
  Row,
  Col,
  ProgressBar,
  ListGroup,
  Button,
} from "react-bootstrap";

const MainContent = () => {
  return (
    <div
      className="main-content p-3"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Card className="welcome-card mb-4">
        <Card.Body>
          <h5>Welcome back, Anna!</h5>
          <p>
            You've learned 80% of your goal this week! Keep it up and improve
            your results!
          </p>
        </Card.Body>
      </Card>

      <Row>
        <Col xs={6}>
          <Card className="results-card mb-4 border-0 shadow-lg">
            <Card.Body>
              <h6>Latest Results</h6>
              <ListGroup variant="flush">
                {/* Add your results here */}
                <ListGroup.Item>
                  Unit 5 - Technology
                  <ProgressBar
                    now={25}
                    variant="danger"
                    className="progress-custom"
                  />
                </ListGroup.Item>
                {/* ... more items */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card className="time-learning-card mb-4 border-0 shadow-lg">
            <Card.Body>
              <h6>Time spent on learning</h6>
              <div className="time-learning-content">
                {/* Add your progress bars here */}
              </div>
              <div className="time-learning-legend">
                {/* Add your legend items here */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <h6 className="section-title">Your courses</h6>
        <Col xs={4}>
          <Card
            className="course-card text-center"
            style={{ backgroundColor: "#6B46C1" }}
          >
            <Card.Body>
              <h6>B2</h6>
              <p>Business English</p>
              <Button variant="light">Grammar →</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card
            className="course-card text-center"
            style={{ backgroundColor: "#6B46C1" }}
          >
            <Card.Body>
              <h6>B2</h6>
              <p>Business English</p>
              <Button variant="light">Grammar →</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card
            className="course-card text-center"
            style={{ backgroundColor: "#6B46C1" }}
          >
            <Card.Body>
              <h6>B2</h6>
              <p>Business English</p>
              <Button variant="light">Grammar →</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more courses here */}
      </Row>
    </div>
  );
};

export default MainContent;
