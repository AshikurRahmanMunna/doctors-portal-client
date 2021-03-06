import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState();
  const {
    data: doctors,
    isLoading,
    refetch,
    error,
  } = useQuery("doctors", () =>
    fetch("https://thawing-dusk-20160.herokuapp.com/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Sl.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} setDeletingDoctor={setDeletingDoctor} refetch={refetch}></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
