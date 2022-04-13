import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-25 mx-auto my-5 vh-100">
      <h2 className="text-primary text-center">REGISTER</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name </Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <p className="">
          <small>
            Old in Geinus ?{" "}
            <Link className="text-primary text-decoration-none	" to="/login">
              Login
            </Link>{" "}
          </small>
        </p>
        <Button className="d-block  py-1" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
