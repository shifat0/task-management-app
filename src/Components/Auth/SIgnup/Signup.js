import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <form className="w-25 m-auto mt-5" onSubmit={handleSubmit}>
        <h1 className="m-5">Signup Form</h1>

        <Form.Floating className="mb-3">
          <Form.Control
            name="name"
            id="floatingInput"
            type="text"
            placeholder="Name"
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Name</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            name="email"
            id="floatingInput01"
            type="email"
            placeholder="Email"
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput01">Email</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            name="password"
            id="floatingPassword"
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
          />
          <label htmlFor="floatingPassword">Password</label>
        </Form.Floating>

        <Button variant="primary" className="mt-3" type="submit">
          Signup
        </Button>
      </form>
    </>
  );
};

export default Signup;
