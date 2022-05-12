import React from "react";
import bg from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section style={{background: `url(${bg})`, backgroundAttachment: 'fixed'}} className="flex justify-center items-center min-h-screen mx-[-48px] bg-fixed">
      <div className="text-center">
        <h5 className="text-xl font-bold text-primary">Contact Us</h5>
        <h2 className="text-4xl text-white">Stay Connected With Us</h2>
        <form className="mx-auto mt-5">
          <input style={{width: '450px', height: '50px'}} className="block mb-4 mx-auto pl-4 rounded-lg" type="email" name="email" placeholder="Email Address" />
          <input style={{width: '450px', height: '50px'}} className="block mb-4 mx-auto pl-4 rounded-lg" type="text" name="subject" placeholder="Subject" />
          <textarea style={{width: '450px', height: '100px'}} className="block mb-4 mx-auto pl-4 rounded-lg" name="desc" placeholder="Your Message"></textarea>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
