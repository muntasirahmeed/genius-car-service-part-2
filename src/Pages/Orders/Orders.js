import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const url = `http://localhost:5000/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrder();
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-center">Orderd Services { orders.length}</h1>
      
    </div>
  );
};

export default Orders;
