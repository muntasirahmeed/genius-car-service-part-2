import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useDetails from "../../hooks/useDetails";

const Chekout = () => {
  const { id } = useParams();
  const [service] = useDetails(id);
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: id,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://whispering-thicket-66203.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!!!");
          event.target.reset();
        }
      });
  };
  return (
    <div className=" my-5 vh-100 w-50 mx-auto">
      <h2 className="text-center  mb-4">Please Order: {service.name}</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input
          className="w-100 block mb-2 rounded border py-2 px-2 border-secondary"
          type="text"
          readOnly
          disabled
          name="name "
          value={user?.displayName}
          placeholder="Name"
          required
        />
        <input
          className="w-100 block mb-2 rounded border py-2 px-2 border-secondary"
          type="email"
          readOnly
          disabled
          value={user?.email}
          name="email "
          placeholder="Email"
          required
        />
        <input
          className="w-100 block mb-2 rounded border py-2 px-2 border-secondary"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          required
        />
        <input
          className="w-100 block mb-2 rounded border py-2 px-2 border-secondary"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <input
          className="w-100 block mb-2 rounded border py-2 px-2 border-secondary"
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />

        <input
          className="w-100 rounded btn btn-success"
          type="submit"
          value="Order Service"
        />
      </form>
    </div>
  );
};

export default Chekout;
