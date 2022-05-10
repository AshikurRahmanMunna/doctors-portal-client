import React from "react";
import chair from '../../assets/images/chair.png';
import chairBG from '../../assets/images/bg.png';

const Banner = () => {
  return (
    <div style={{background: `url(${chairBG})`}} class="hero min-h-screen px-12 bg-no-repeat bg-center bg-cover">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
