import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
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
