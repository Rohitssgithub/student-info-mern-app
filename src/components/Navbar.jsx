import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../Reducer/userDetailSlice";

const Navbar = () => {
  const { users } = useSelector((state) => state.app);
  console.log(users)

  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  const changefun = (e) => {
    setSearchData(e.target.value)
  }

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">RTK</h4>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Post
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input className="form-control me-2"
                type="search"
                placeholder="Search student"
                aria-label="Search"
                value={searchData}
                onChange={changefun} />
            </form>
          </div>
        </div>
      </nav>
    </>

  );
};

export default Navbar;
