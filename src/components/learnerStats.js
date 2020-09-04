import React from "react";
import { connect } from "react-redux";

import { Calender } from "../components/calender/calender";

const LearnerStats = () => {
  const learnerDetails = {
    padding: "50px",
    backgroundColor: "#2fcbd6",
    height: "400px",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12" style={learnerDetails}>
          <div className="col-sm-6 col-md-6">
            <div className="learnerDetails">
              <h2>Rajkumar</h2>
              <p>Ph: 342432432432</p>
              <p>Attendance Count : 50/90</p>
              <p>number of commits and lines in 3 months : 1240</p>
              <p>Ph: 342432432432</p>
              <p>Email Id: venkyraj55@gmail.com</p>
              <p>Github: Id: venkyraj55@gmail.com</p>
              <p>linkedin: 342432432432</p>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-md-offset-1 col-sm-offset-1">
            <div className="">
              <Calender />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-10 col-md-10">
          <Calender />
        </div>
      </div> */}
    </div>
  );

  const mapStateToProps = (state) => {
    return {
      name: state.learnerDetails.name,
    };
  };
};

export default connect(mapStateToProps)(LearnerStats);
