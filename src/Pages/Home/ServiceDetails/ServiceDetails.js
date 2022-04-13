import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Service Details : {id}</h1>
      <button onClick={()=>navigate('/checkout')}>Procced Chekout</button>
    </div>
  );
};

export default ServiceDetails;
