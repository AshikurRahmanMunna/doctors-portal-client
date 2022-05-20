import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success(`${name} is Deleted`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              refetch();
              setDeletingDoctor(null);
            } else {
              toast.error(`Something Went Wrong`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are You Sure You Want to delete {name}
          </h3>
          <p class="py-4">
            It Can't Be Undone
          </p>
          <div class="modal-action">
            <label onClick={() => setDeletingDoctor(null)} for="delete-confirm-modal" class="btn">
              Cancel
            </label>
            <button className="btn btn-error" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
