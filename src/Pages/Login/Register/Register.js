import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-25 mx-auto my-5 vh-100">
      <h2 className="text-primary text-center">REGISTER</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name </Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
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
