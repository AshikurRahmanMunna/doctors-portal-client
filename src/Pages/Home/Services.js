import React from "react";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from "./Service";
import ServiceHero from "./ServiceHero";

const Services = () => {
    const services = [
        {
          _id: 1,
          name: 'Fluoride Treatment',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          img: fluoride
        },
        {
          _id: 2,
          name: 'Cavity Filling',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          img: cavity
        },
        {
          _id: 3,
          name: 'Teeth Whitening',
          description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
          img: whitening
        },
      ]
  return (
    <div className="my-32">
      <div className="text-center">
        <h3 className="text-primary text-2xl font-bold uppercase">Our Services</h3>
        <h2 className="text-4xl font-bold">Services We Provide</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
      </div>
      <ServiceHero></ServiceHero>
    </div>
  );
};

export default Services;
