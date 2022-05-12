import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log({
        slot,
        name,
        email, 
        date, 
        phone,
    });
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle backdrop-blur">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full"
            />
            <select name="slot" class="select select-bordered w-full">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Book Appointment"
              class="btn btn-secondary w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;