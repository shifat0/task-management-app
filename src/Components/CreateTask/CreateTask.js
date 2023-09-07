import React, { useState } from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";

const CreateTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: Date,
    priority: "",
  });

  console.log(task);

  const handleCreateTask = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleTask = (e) => {
    e.preventDefault();
    localStorage.setItem("task", JSON.stringify(task));
    setShowModal(false);
  };

  const handleBlur = (e) => {
    const newTask = { ...task };
    newTask[e.target.name] = e.target.value;
    setTask(newTask);
  };

  return (
    <Container>
      <Button
        variant="secondary"
        size="sm"
        className="mt-2 float-end"
        onClick={handleCreateTask}
      >
        Create a new Task
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onBlur={handleBlur}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                onBlur={handleBlur}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlDate1">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" onBlur={handleBlur} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="priority"
              onBlur={handleBlur}
            >
              <Form.Label className="m-2">Priority Level :</Form.Label>
              <Form.Check
                inline
                label="High"
                name="priority"
                type="radio"
                value="High"
                defaultChecked={task.priority === "High"}
              />
              <Form.Check
                inline
                label="Medium"
                name="priority"
                type="radio"
                value="Medium"
                defaultChecked={task.priority === "Medium"}
              />
              <Form.Check
                inline
                label="Low"
                name="priority"
                type="radio"
                value="Low"
                defaultChecked={task.priority === "Low"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateTask;
