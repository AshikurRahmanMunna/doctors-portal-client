import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="mx-auto gap-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <InfoCard
        img={clock}
        cardTitle="Opening Hours"
        description="10:00AM To 10:00PM"
        bgClass="bg-gradient-to-r from-primary to-secondary"
      ></InfoCard>
      <InfoCard
        img={marker}
        cardTitle="Visit Our Location"
        description="Brooklyn, NY 10036, United States"
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        img={phone}
        cardTitle="Contact Us Now"
        description="+000 123 456789"
        bgClass="bg-gradient-to-r from-primary to-secondary"
      ></InfoCard>
    </div>
  );
};

export default Info;
