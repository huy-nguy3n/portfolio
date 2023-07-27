import { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import fridayfinder from "../assets/img/friday-finder.png";
import wordlesolver from "../assets/img/wordle.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import iconImage from '../assets/img/nav-icon3.svg';

export const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "FridayFinder",
      description: "A review, map based web application that utilizes location and rating features to serve attractions related to the individual users. Users can connect with friends to create a network of recommended attractions.",
      tech: "Javascript web application, built with Next.js React Framework, Node.js for server and backend, Firebase for authentication and database, Material UI: Joy UI components and Google Maps API.",
      image: fridayfinder,
      git_link: "https://github.com/huy-nguy3n/FridayFinder",
    },
    {
      title: "Machine Learning",
      description: "Description of Project 2.",
      tech: "write tech",
      image: fridayfinder,
      git_link: "https://github.com/huy-nguy3n/Machine-Learning",
    },
    {
      title: "Wordle Solver",
      description: "Wordle Solver is a tool designed to assist users in solving the popular word puzzle game, Wordle.",
      tech: "Developed using C programming language, speed, accuracy, and user-friendly interface.",
      image: wordlesolver,
      git_link: "https://github.com/huy-nguy3n/Wordle-Solver",
    },
  ];

  // State to manage the visibility and animation of each project card
  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  // Function to handle the visibility change when a card comes into view
  const handleVisibilityChange = (index, visible) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = visible;
    setIsVisible(updatedVisibility);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div>
              <h2>Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <TrackVisibility onChange={(isVisible) => handleVisibilityChange(index, isVisible)}>
                    {({ isVisible: isCardVisible }) => (
                      <Card
                        className={`animate__animated ${isCardVisible ? "animate__fadeIn" : ""}`}
                        style={{ backgroundColor: "#151515", borderRadius: "10px" }} // Set your custom color here
                      >
                        <Row>
                          <Col md="4">
                            {/* Increase height and width here */}
                            <Image
                              src={project.image}
                              alt={project.title}
                              fluid
                              style={{ height: "350px", width: "350px", borderRadius: "10px" }}
                            />
                          </Col>
                          <Col md="8">
                            <Card.Body>
                              <Card.Title>{project.title}</Card.Title>
                              <Card.Text>
                                {project.description}
                              </Card.Text>
                              <Card.Title>Technology</Card.Title>
                              <Card.Text>
                                {project.tech}
                              </Card.Text>
                              <a href={project.git_link} target="_blank">
                                <Button variant="dark">
                                  <img src={iconImage} alt="" className="icon-img" /> Github
                                </Button>
                              </a>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    )}
                  </TrackVisibility>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
