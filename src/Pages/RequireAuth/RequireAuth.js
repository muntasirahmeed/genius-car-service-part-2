import React from "react";

import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  let [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-success">Please Verify Your Email</h1>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            console.log('sent')
            toast("Sent email");
          }}
        >
          Sent verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
