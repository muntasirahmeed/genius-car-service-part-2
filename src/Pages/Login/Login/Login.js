import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <div className="w-25 mx-auto my-5 vh-100">
      <h2 className="text-primary text-center">LOGIN</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className="">
          <small>
            New in Geinus ?{" "}
            <Link
              className="text-primary text-decoration-none"
              //   onClick={() => navigate("/register")}
              to="/register"
            >
              Register
            </Link>{" "}
          </small>
        </p>
        <Button
          className="d-block  cursor-pointer py-1"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
