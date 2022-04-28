import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user1 || user2) {
      navigate(from, { replace: true });
    }
  }, [user1, user2]);
  let errorElement;
  if (error1 || error2) {
    errorElement = (
      <p className="m-0">
        <small className="text-danger">
          {error1?.message} {error2?.message}
        </small>
      </p>
    );
  }
  if (loading1 || loading2) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="d-flex align-items-center mt-3">
        <div
          style={{ height: "1px" }}
          className="w-50 bg-secondary rounded-pill"
        ></div>
        <div className="mx-4">Or</div>
        <div
          style={{ height: "1px" }}
          className="w-50 bg-secondary rounded-pill"
        ></div>
      </div>
      {/* {error && (
        <p className="text-danger">
          <small>{error.message}</small>
        </p>
      )} */}
      {errorElement}
      <div className="d-flex flex-column align-items-center mt-3  ">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info rounded-pill d-flex d-block w-75 justify-content-evenly align-items-center  mt-2 "
        >
          <img
            style={{ height: "25px" }}
            className="me-1"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          Sign in with Google
        </button>
        <button className="btn btn-primary rounded-pill d-flex d-block w-75 justify-content-evenly align-items-center  mt-2 ">
          <img
            style={{ height: "25px" }}
            className=""
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            alt=""
          />
          Sign in with FaceBok
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark rounded-pill d-flex d-block w-75 justify-content-evenly align-items-center mt-2 "
        >
          <img
            style={{ height: "25px" }}
            className="me-1 bg-white rounded-circle"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
