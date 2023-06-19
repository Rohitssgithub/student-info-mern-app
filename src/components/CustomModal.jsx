import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);
  console.log(allusers)

  const singleUser = allusers.filter((ele) => ele._id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <i onClick={() => setShowPopup(false)} className="fa-solid fa-xmark close-iocn"></i>
        <h2>{singleUser[0].name}</h2>
        <p>{singleUser[0].email}</p>
        <p>{singleUser[0].age}</p>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModal;
