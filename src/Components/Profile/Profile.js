import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Card, Container } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser) setUser(getUser);
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <h2 className="fw-bold mt-2 mb-5">Profile</h2>
        <Card
          bg="warning"
          text="dark"
          border="warning"
          style={{
            maxWidth: "auto",
            margin: "0 auto",
            textAlign: "center",
            padding: "3rem",
          }}
        >
          <Card.Body>
            <Card.Title>Welcome, {user.name}</Card.Title>
            <Card.Text>Email: {user.email}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
