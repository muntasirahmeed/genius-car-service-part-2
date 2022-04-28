import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import axiosPrivate from "../../api/axiousPrivate";
import auth from "../../firebase.init";
const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://whispering-thicket-66203.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          Navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="mt-5">
      <h1 className="text-center">Orderd Services: {orders.length}</h1>
    </div>
  );
};

export default Orders;
