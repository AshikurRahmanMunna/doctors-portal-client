import React from "react";

const InfoCard = ({ cardTitle, img, description, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} p-4 text-white`}>
      <figure>
        <img src={img} alt={cardTitle} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
