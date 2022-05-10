import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
  return (
    <div style={{background: `url(${appointment})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '-48px'}} >
      <div className="hero text-white px-24">
        <div className="hero-content flex-col p-0 lg:flex-row">
          <img
            src={doctor}
            className="max-w-sm h-100 rounded-lg m-0 p-0"
            alt="doctor"
          />
          <div className="my-16">
            <p className="text-primary">Appointment</p>
            <h1 className="text-4xl mb-3">Make an appointment Today</h1>
            <p className="mb-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
