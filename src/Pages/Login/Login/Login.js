import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = (
      <p className="m-0">
        <small className="text-danger">{error?.message}</small>
      </p>
    );
  }
  const forgetPass = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast("Enter Your Email");
    }
  };

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
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {errorElement}
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
        <p className="">
          <small className="text-primary ">
            <button
              onClick={forgetPass}
              className="m-0 p-0 text-decoration-none btn btn-link"
            >
              {" "}
              Forget Password ?{" "}
            </button>
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
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
