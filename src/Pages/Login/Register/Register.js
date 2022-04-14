import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  if (loading || updating) {
   return <Loading></Loading>
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
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

        <Form.Group className="" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className={`mt-3  ${agree ? "text-success" : "text-secondary"}`}
              name="terms"
              type="checkbox"
              label="Accepts terms &#38; conditions"
            />
          </Form.Group>
        </Form.Group>

        <p className="">
          <small>
            Old in Geinus ?{" "}
            <Link className="text-primary text-decoration-none	" to="/login">
              Login
            </Link>{" "}
          </small>
        </p>
        <Button
          disabled={!agree}
          className="d-block  py-1"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
