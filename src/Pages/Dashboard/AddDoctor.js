import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleAddDoctor = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl">Add Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide A Valid Email",
              },
            })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} class="select w-full max-w-xs">
            {services?.map((service) => (
              <option key={service._id} value={service?.name}>
                {service?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <input type="submit" value="Add" className="btn w-80" />
      </form>
    </div>
  );
};

export default AddDoctor;
