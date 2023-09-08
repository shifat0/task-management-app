import React, { useEffect, useState } from "react";
import { Card, Container, Button, Dropdown } from "react-bootstrap";

const DisplayTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = JSON.parse(localStorage.getItem("task"));
    if (getTask) setTasks(getTask);
  }, [setTasks]);

  const handleDelete = (index) => {
    let taskList;
    if (localStorage.getItem("task") == null) {
      taskList = [];
    } else {
      taskList = JSON.parse(localStorage.getItem("task"));
    }
    taskList.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(taskList));
    window.location.reload();
  };

  const handleSorting = () => {
    tasks.sort((a, b) => {
      return a.dueDate - b.dueDate;
    });
    setTasks(tasks);
  };
  console.log(tasks);

  return (
    <Container>
      <h2 className="fw-bold text-start mt-2 mb-5">Tasks</h2>

      <Dropdown className="d-inline float-end">
        <Dropdown.Toggle id="dropdown-autoclose-true">Sort By</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleSorting}>Date</Dropdown.Item>
          <Dropdown.Item>Priority</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {tasks?.map((task, index) => {
        return (
          <Card
            key={index}
            // bg="warning"
            text="dark"
            border="warning"
            style={{
              width: "auto",
              margin: "8rem auto",
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
            <Button
              variant="danger"
              size="sm"
              className="mb-2 m-auto"
              style={{ width: "4rem" }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default DisplayTask;
