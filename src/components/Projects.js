import { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import fridayfinder from "../assets/img/friday-finder.png";
import wordlesolver from "../assets/img/wordle.jpg";
import machinelearn from "../assets/img/ML.jpeg";
import aiagent from "../assets/AI-Agent.jpeg";
import pacman from "../assets/img/pacman.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import iconImage from '../assets/img/nav-icon3.svg';

export const Projects = () => {
  const projects = [
    {
      title: "FridayFinder",
      description: "A review, map based web application that utilizes location and rating features to serve attractions related to the individual users. Users can connect with friends to create a network of recommended attractions.",
      tech: "Javascript web application, built with Next.js React Framework, Node.js for server and backend, Firebase for authentication and database, Material UI: Joy UI components and Google Maps API.",
      image: fridayfinder,
      git_link: "https://github.com/huy-nguy3n/FridayFinder",
    },
    {
      title: "AI Research Agent",
      description: "Developed an AI-powered research assistant to automate information gathering, summarization, and structured output generation for user queries.",
      tech: "Built using LangChain, Anthropic's Claude model, Web Search, Wikipedia API, and Pydantic for structured data handling.",
      image: aiagent,
      git_link: "https://github.com/huy-nguy3n/AI-Research-Agent",
    },
    {
      title: "AI PACMAN",
      description: (
        <div>
          A modified version of the Pacman educational project from the Berkeley AI Lab. This repository includes three main projects:
          <ul>
            <li>
              Search in Pac-Man: Pac-Man agent will find paths through their maze world, both to reach a particular location and to collect food efficiently.
            </li>
            <li>
              Multi-Agent Pac-Man: Agents are designed for the classic version of Pac-Man, including ghosts.
            </li>
            <li>
              Reinforcement Learning: Agents are first tested on Gridworld, then apply to a simulated robot controller and Pac-Man.
            </li>
          </ul>
        </div>
      ),
      tech: "Developed using Python programming language",
      image: pacman,
      git_link: "https://github.com/huy-nguy3n/AI-PACMAN",
    },
    {
      title: "Machine Learning",
      description: (
        <ul>
          <li>
            Amazon Recommender System: a recommendation system to predict the ratings and popularity of products on Amazon, using collaborative filtering to recommend products.
          </li>
          <li>
            Stock Price Prediction: analyzing the risk of a stock based on its previous performance history, using Long Short-Term Memory (LSTM) to predict future stock prices.
          </li>
          <li>
            California Housing Prices: analyzing how different factors affect housing prices, using Linear Regression Model and Random Forest Model to predict housing prices.
          </li>
        </ul>
      ),
      tech: "Developed using Python programming language",
      image: machinelearn,
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

  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  const handleVisibilityChange = (index, visible) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = visible;
    setIsVisible(updatedVisibility);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div>
              <h2 style={{ color: "white" }}>Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <TrackVisibility onChange={(isVisible) => handleVisibilityChange(index, isVisible)}>
                    {({ isVisible: isCardVisible }) => (
                      <Card
                        className={`animate__animated ${isCardVisible ? "animate__fadeIn" : ""}`}
                        style={{ backgroundColor: "#151515", borderRadius: "10px", color: "white" }}
                      >
                        <Row>
                          <Col md="4">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fluid
                              style={{ height: "350px", width: "350px", borderRadius: "10px" }}
                            />
                          </Col>
                          <Col md="8">
                            <Card.Body>
                              <Card.Title style={{ color: "white" }}>{project.title}</Card.Title>
                              <Card.Text style={{ color: "white" }}>
                                {project.description}
                              </Card.Text>
                              <Card.Title style={{ color: "white" }}>Technology</Card.Title>
                              <Card.Text style={{ color: "white" }}>
                                {project.tech}
                              </Card.Text>
                              <a href={project.git_link} target="_blank" rel="noopener noreferrer">
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
