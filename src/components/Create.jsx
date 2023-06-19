import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Reducer/userDetailSlice";
import { Link } from "react-router-dom";
const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/");
  };

  return (
    <div className="container">
      <form className="mx-auto my-5 row fill-data-box" onSubmit={handleSubmit}>
        <h2 className="my-2 text-center">Fill the data</h2>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label class="form-check-label">Female</label>
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

export default Create;
