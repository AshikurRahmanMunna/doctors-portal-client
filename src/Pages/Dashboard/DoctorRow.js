import React from "react";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { _id, img, name, specialty, email } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img title={_id} src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal"  class="btn btn-error btn-xs">Delete</label>
      </td>
    </tr>
  );
};

export default DoctorRow;
