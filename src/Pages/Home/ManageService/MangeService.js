import React, { useEffect, useState } from "react";

const MangeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://whispering-thicket-66203.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure ?");
    if (procced) {
      const url = `https://whispering-thicket-66203.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      Welcome to mange page
      {services.map((service) => (
        <h4 className="text-center" key={service._id}>
          {service._id}___{service.name}__ {service.price}
          :::::{" "}
          <button
            onClick={() => handleDelete(service._id)}
            className="btn btn-danger"
          >
            x
          </button>
        </h4>
      ))}
    </div>
  );
};

export default MangeService;
