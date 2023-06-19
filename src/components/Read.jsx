import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../Reducer/userDetailSlice";
import CustomModal from "./CustomModal";
import Loading from "../components/Loading"

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const alluser = useSelector((state) => state.app);
  const { users, loading, searchData } = useSelector((state) => state.app);
  console.log(users)
  console.log(searchData)

  useEffect(() => {
    dispatch(showUser());
  }, []);



  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <div className="container">
        <div className="row mainrow p-4">
          <h2>All Student List</h2>
          <div className="col-md-4">
            <input
              className="form-check-input"
              name="gender"
              checked={radioData === ""}
              type="radio"
              onChange={(e) => setRadioData("")}
            />
            <label className="form-check-label mx-2">All</label>
            <input
              className="form-check-input mx-2"
              name="gender"
              checked={radioData === "Male"}
              value="Male"
              type="radio"
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label className="form-check-label">Male</label>
            <input
              className="form-check-input mx-2"
              name="gender"
              value="Female"
              checked={radioData === "Female"}
              type="radio"
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
      </div>



      {loading ? <Loading />
        :
        <div className="container my-3">
          <div className="row p-2">
            {users &&
              users
                .filter((ele) => {
                  if (searchData.length === 0) {
                    return ele;
                  }
                  else {
                    return ele.name.toLowerCase().includes(searchData.toLowerCase());
                    // return Object.values(ele).some((value) =>
                    //   value.toString().includes(searchData.toLowerCase())
                    // );
                  }
                })
                .filter((ele) => {
                  if (radioData === "Male") {
                    return ele.gender === radioData;
                  }
                  else if (radioData === "Female") {
                    return ele.gender === radioData;
                  }
                  else return ele;
                })
                .map((ele) => (
                  <div key={ele._id} className="student-info-div col-lg-4 col-md-6 text-center">
                    <div className="card-body">
                      <h5 className="card-title">Name : {ele.name}</h5>
                      <h6 className="card-text">Email : {ele.email}</h6>
                      <h6 className="card-text">Gender : {ele.gender}</h6>
                      <button
                        className="card-link btn btn-primary"
                        onClick={() => [setId(ele._id), setShowPopup(true)]}
                      >
                        View
                      </button>
                      <button className="btn btn-danger mx-2">
                        <Link className='links' to={`/edit/${ele && ele._id}`}>
                          Edit
                        </Link>
                      </button>
                      <button className="btn btn-dark">
                        <Link
                          onClick={() => dispatch(deleteUser(ele._id))}
                          className="links"
                        >
                          Delete
                        </Link>
                      </button>

                    </div>
                  </div>
                ))
            }
          </div>
        </div>

      }

    </div>
  );
};

export default Read;
