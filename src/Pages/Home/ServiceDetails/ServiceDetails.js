import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="text-center mt-5 ">
      <h1>Book this service : {service.name}</h1>
      <button
        className="btn btn-primary mt-5"
        onClick={() => navigate("/checkout")}
      >
        Procced Chekout
      </button>
    </div>
  );
};

export default ServiceDetails;
