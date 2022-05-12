import React from "react";

const Review = ({ review: { name, img, review, location } }) => {
  return (
    <div class="card w-96 mb-4 shadow-md hover:shadow-xl cursor-pointer duration-300 text-primary-content">
      <div class="card-body flex justify-between items-center">
        <div>
          <p>{review}</p>
        </div>
      </div>
      <div className="flex items-center ml-6 mb-4">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
            <h4>{name}</h4>
            <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
