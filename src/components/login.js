import React from "react";

export const Login = () => {
  const btns = {
    position: "absolute",
    top: "47%",
    backgroundColor: "#11cbd7",
    color: "#fff",
    border: "1px solid #c6f1e7",
    padding: "5px",
    borderRadius: "12%",
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f0fff3", height: "80px" }}
    >
      <div className="col-sm-6 col-sm-offset-6" style={{ marginTop: "1%" }}>
        <form className="form-inline" action="/action_page.php">
          <div className="form-group">
            <label>Email address:</label> <br />
            <input type="email" className="form-control" id="email" />
            &nbsp; &nbsp; &nbsp;
          </div>

          <div className="form-group">
            <label>Password: </label> <br />
            <input type="password" className="form-control" id="pwd" />
            &nbsp; &nbsp; &nbsp;
          </div>
          <button type="submit" style={btns}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
