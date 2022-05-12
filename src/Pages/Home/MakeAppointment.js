import React, { useEffect, useState } from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
  return (
    <section className="flex justify-center items-center mx-[-48px]" style={{
      background: `url(${appointment})`, backgroundAttachment: 'fixed'
    }}>
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="doctor" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-4xl text-white pb-4">Make an Appointment Today</h2>
        <p className="text-white pb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illum ipsam aperiam, vel animi perspiciatis nihil ex et quisquam facilis! Sit amet magnam vitae ullam, sequi architecto nam culpa quo ad, totam deleniti adipisci ea excepturi distinctio soluta accusamus velit.</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
