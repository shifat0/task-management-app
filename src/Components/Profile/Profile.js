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
          <Card.Img
            variant="top"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "0 auto",
            }}
            src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
          />
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
