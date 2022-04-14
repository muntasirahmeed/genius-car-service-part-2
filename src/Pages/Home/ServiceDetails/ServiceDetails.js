import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  return (
    <div className="text-center mt-5 vh-100">
      <h1>Welcome to Service Details : {id}</h1>
      <button className="btn btn-primary mt-5" onClick={()=>navigate('/checkout')}>Procced Chekout</button>
    </div>
  );
};

export default ServiceDetails;
