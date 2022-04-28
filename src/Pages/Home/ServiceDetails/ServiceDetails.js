import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDetails from "../../../hooks/useDetails";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service] = useDetails(id);
  return (
    <div className="text-center mt-5 ">
      <h1>Book this service : {service.name}</h1>
      <button
        className="btn btn-primary mt-5"
        onClick={() => navigate(`/checkout/${id}`)}
      >
        Procced Chekout
      </button>
    </div>
  );
};

export default ServiceDetails;
