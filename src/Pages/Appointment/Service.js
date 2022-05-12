import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold text-secondary">{name}</h2>
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
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0 ? true : false} className="btn btn-secondary uppercase w-48">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
