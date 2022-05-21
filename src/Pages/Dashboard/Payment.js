import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1ngZB7Dfi71X8eRg3mCipiQ0T6Xuw1INI5jkT394fN3UCX3WNwpIgAr7cgGpIZIHoH5IyAtG6xMcPGuTOrMgeb0052UEX4a7"
);

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`https://thawing-dusk-20160.herokuapp.com/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { treatment, price, date, slot, patientName } = appointment;
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-2xl text-purple-500">Please Pay for: {id}</h2>
        <div class="card w-50 my-12 max-w-md bg-[#f5f5f5] shadow-md">
          <div class="card-body">
            <p className="text-success font-bold">Hello, {patientName}</p>
            <h2 class="card-title">Please Pay For: ${treatment}</h2>
            <p>
              Your appointment: <span className="text-orange-500">{date}</span>{" "}
              at <span className="text-orange-500">{slot}</span>.
            </p>
            <p>Please Pay: ${price}</p>
          </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-md bg-[#f5f5f5]">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckOutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
