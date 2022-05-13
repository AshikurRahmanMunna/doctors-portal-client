import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div style={{background: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker style={{background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)'}} className="shadow-sm p-3 rounded-md" mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
