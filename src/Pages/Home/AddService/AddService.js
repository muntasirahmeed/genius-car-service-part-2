import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/services";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center mt-5">Please Add Service </h1>
      <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Service Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Descriptions"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("img", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
