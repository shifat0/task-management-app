import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (
      user.email === loggedInUser.email &&
      user.password === loggedInUser.password
    ) {
      navigate("/");
      localStorage.setItem("loggedIn", true);
    } else alert("wrong Email or Password");
  };

  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <form className="w-25 m-auto mt-5" onSubmit={handleLogin}>
        <h1 className="m-5">Login Form</h1>

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
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
