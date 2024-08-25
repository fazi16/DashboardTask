import React from "react";
import "./Dashboard.css";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  ListGroup,
  Button,
} from "react-bootstrap";
import { FaUser, FaChartBar, FaCog, FaComment, FaBook } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div
      className="m-0 p-0 border-0"

      // style={{ backgroundColor: "black" }}
    >
      <Row style={{height:'100vh'}}>
        {/* Sidebar */}
        <Col xs={2} md={2} className="sidebar " >
          <Card className="border-0 shadow-lg">
            <div className="logo mb-4">Logo</div>
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
        </Col>

        {/* Main Content */}
        <Col xs={8} md={8} className="main-content p-3">
          <Row>
            <Card className="welcome-card mb-4 border-0 shadow-lg">
              <Card.Body>
                <h5>Welcome back, Anna!</h5>
                <p>
                  You've learned 80% of your goal this week! Keep it up and
                  improve your results!
                </p>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            {/* Latest Results Card */}
            <Col
              xs={6}
              // className="shadow-lg border-0"
              style={{ minHeight: "400px" }}
            >
              <Card
                className="results-card mb-4 border-0 shadow-lg"
                style={{ minHeight: "400px" }}
              >
                <Card.Body>
                  <h6>Latest Results</h6>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Unit 5 - Technology
                      <ProgressBar
                        now={25}
                        variant="danger"
                        className="progress-custom"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Unit 12 - Ecology
                      <ProgressBar
                        now={44}
                        variant="primary"
                        className="progress-custom"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Unit 9 - Real estate
                      <ProgressBar
                        now={40}
                        variant="info"
                        className="progress-custom"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Unit 8 - Education
                      <ProgressBar
                        now={15}
                        variant="danger"
                        className="progress-custom"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Unit 16 - Job market
                      <ProgressBar
                        now={76}
                        variant="primary"
                        className="progress-custom"
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Time Spent on Learning Card */}
            <Col xs={6} style={{ minHeight: "400px" }}>
              <Card
                className="time-learning-card mb-4 border-0 shadow-lg"
                style={{ minHeight: "400px" }}
              >
                <Card.Body>
                  <h6>Time spent on learning</h6>
                  <div className="time-learning-content">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day, index) => (
                        <div className="time-learning-day" key={index}>
                          <div className="time-bar">
                            <div
                              className="progress-segment vocabulary"
                              style={{
                                height: "20%",
                                backgroundColor: "#ff6384",
                              }}
                            ></div>
                            <div
                              className="progress-segment grammar"
                              style={{
                                height: "30%",
                                backgroundColor: "#36a2eb",
                              }}
                            ></div>
                            <div
                              className="progress-segment listening"
                              style={{
                                height: "40%",
                                backgroundColor: "#ffce56",
                              }}
                            ></div>
                            <div
                              className="progress-segment writing"
                              style={{
                                height: "10%",
                                backgroundColor: "#4bc0c0",
                              }}
                            ></div>
                          </div>
                          <span className="day-label">{day}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="time-learning-legend">
                    <span className="legend-item">
                      <span className="legend-circle vocabulary"></span>{" "}
                      Vocabulary
                    </span>
                    <span className="legend-item">
                      <span className="legend-circle grammar"></span> Grammar
                    </span>
                    <span className="legend-item">
                      <span className="legend-circle listening"></span>{" "}
                      Listening
                    </span>
                    <span className="legend-item">
                      <span className="legend-circle writing"></span> Writing
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Your Courses Section */}
          <Row className="mt-4">
            <Card className="border-0 shadow-lg">
              <Row>
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
                    style={{ backgroundColor: "#9F7AEA" }}
                  >
                    <Card.Body>
                      <h6>B2</h6>
                      <p>Common English</p>
                      <Button variant="light">Phrasal verbs →</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card
                    className="course-card text-center"
                    style={{ backgroundColor: "#F56565" }}
                  >
                    <Card.Body>
                      <h6>C1</h6>
                      <p>Business Spanish</p>
                      <Button variant="light">Vocabulary →</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>

        {/* Right Sidebar */}
        <Col
          md={2}
          xs={2}
          // style={{ backgroundColor: "red" }}
        >
          <Card className="profile-card text-center w-100 shadow-lg  border-0">
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
          <Card className=" w-100 shadow-lg border-0">
            <h6>Reminders</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>Eng - Vocabulary test</ListGroup.Item>
              <ListGroup.Item>Eng - Send grammar homework</ListGroup.Item>
              <ListGroup.Item>Spanish - Send essay</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
