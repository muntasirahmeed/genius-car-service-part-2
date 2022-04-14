import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Loading;
