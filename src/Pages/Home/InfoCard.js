import React from "react";

const InfoCard = ({ cardTitle, img, description, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgClass} p-4 text-white`}>
      <figure className="lg:p-0 sm:pt-5">
        <img className="lg:p-0 pt-3" src={img} alt={cardTitle} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
