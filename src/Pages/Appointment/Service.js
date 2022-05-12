import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-2xl font-bold text-secondary">{name}</h2>
        <p className="text-center">
            {
                slots.length > 0
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">Try another Date.</span>
            }
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-center">
          <button disabled={slots.length === 0 ? true : false} class="btn btn-secondary uppercase w-48 disabled:bg-teal-300">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
