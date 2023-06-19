import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Reducer/userDetailSlice";
import { singleUser, showUser } from "../Reducer/userDetailSlice";
import { Link } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { users, loading, singleUsers } = useSelector((state) => state.app);
  // console.log(singleUsers)  



  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const [updateData, setUpdateData] = useState();


  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele._id === id);
      setUpdateData(singleUser[0]);
    }
  }, [users]);

  console.log("updated data", updateData);
  useEffect(() => {
    dispatch(showUser())
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/");
  };

  return (
    <div className="container">
      <form className="mx-auto my-5 row update-student" onSubmit={handleUpdate}>
        <h2 className="my-2 text-center">Edit the data</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="col text-center">
          <button type="submit" className="btn btn-danger mx-2">
            Submit
          </button>
          <button type="submit" className="btn btn-danger">
            <Link className="links" to='/'>
              Go Back
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
