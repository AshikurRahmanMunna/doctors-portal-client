import React from "react";

const Service = ({service}) => {
  const {name, img, description} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-md duration-300 cursor-pointer mb-5 hover:shadow-lg">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p><small>{description}</small></p>
      </div>
    </div>
  );
};

export default Service;
