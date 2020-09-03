import React from "react";

export const LearnerList = () => {
  const learnerBlock = {
    width: "350px",
    height: "100px",
    backgroundColor: "#2fcbd6",
    padding: "5px",
    margin: "5px",
    color: "#f0fff3",
  };

  return (
    <div className="container">
      <div className="col-sm-12">
        <div
          className="col-sm-5"
          style={{ height: "600px", overflow: "scroll" }}
        >
          <h2>Learner List</h2>
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="learnerBlock" style={learnerBlock}>
                <div className="learner-listItem">
                  <h3>
                    {" "}
                    <a href="">Rajkumar</a>{" "}
                  </h3>
                  <p style={{}}>Location:India </p>
                </div>
                {/* <ul className="learner-list">
            <li style={learnerItem}>
              <a href="default.asp">Listner1</a>
            </li>
          </ul> */}
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src={require("./../images/thumbnail.png")}
                alt="thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="learnerBlock" style={learnerBlock}>
                <div className="learner-listItem">
                  <h3>
                    <a href="">Rajkumar</a>
                  </h3>
                  <p style={{}}>Location:India </p>
                </div>
                {/* <ul className="learner-list">
            <li style={learnerItem}>
              <a href="default.asp">Listner1</a>
            </li>
          </ul> */}
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src={require("./../images/thumbnail.png")}
                alt="thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="learnerBlock" style={learnerBlock}>
                <div className="learner-listItem">
                  <h3>
                    <a href="">Rajkumar</a>
                  </h3>
                  <p style={{}}>Location:India </p>
                </div>
                {/* <ul className="learner-list">
            <li style={learnerItem}>
              <a href="default.asp">Listner1</a>
            </li>
          </ul> */}
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src={require("./../images/thumbnail.png")}
                alt="thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="learnerBlock" style={learnerBlock}>
                <div className="learner-listItem">
                  <h3>
                    <a href="">Rajkumar</a>
                  </h3>
                  <p style={{}}>Location:India </p>
                </div>
                {/* <ul className="learner-list">
            <li style={learnerItem}>
              <a href="default.asp">Listner1</a>
            </li>
          </ul> */}
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src={require("./../images/thumbnail.png")}
                alt="thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="learnerBlock" style={learnerBlock}>
                <div className="learner-listItem">
                  <h3>
                    <a href="">Rajkumar</a>
                  </h3>
                  <p style={{}}>Location:India </p>
                </div>
                {/* <ul className="learner-list">
            <li style={learnerItem}>
              <a href="default.asp">Listner1</a>
            </li>
          </ul> */}
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src={require("./../images/thumbnail.png")}
                alt="thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="learner-block">
            <img
              src={require("./../images/download.png")}
              alt="teaching"
              style={{ width: "600px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
