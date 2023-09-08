import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

const DisplayTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = JSON.parse(localStorage.getItem("task"));
    if (getTask) setTasks(getTask);
  }, []);

  return (
    <Container>
      <h2 className="fw-bold text-start mt-2 mb-5">Tasks</h2>
      {tasks.map((task, index) => {
        return (
          <Card
            key={index}
            bg="warning"
            text="dark"
            border="warning"
            style={{
              width: "auto",
              margin: "3rem auto",
              textAlign: "justify",
            }}
          >
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Subtitle className="mb-2">
                Priority Level: {task.priority}
              </Card.Subtitle>
              <Card.Text>{task.description}</Card.Text>
              <Card.Text>Due Date: {task.dueDate}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default DisplayTask;
