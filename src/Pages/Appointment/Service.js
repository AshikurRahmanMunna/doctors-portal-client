import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
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
          <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0 ? true : false} className="btn border-none  bg-gradient-to-r from-secondary to-primary text-white uppercase w-48">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
