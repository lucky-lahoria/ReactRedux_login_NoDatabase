import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      warning: false,
    };
  }

  Login = (e) => {
    e.preventDefault();
    this.props.USER_LOGIN(this.state);
    if (this.state.username == "" && this.state.password == "") {
      this.setState({ warning: true });
    }
    console.log(this.props.abcusers);
  };

  kumar = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        className="d-flex  align-items-center justify-content-center flex-column shaddow_bg"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        <div className="shaddow_bg" style={{width: "20%"}}>
          <lable for="username" className="pb-0" style={{ width: "25%" }}>
            Username:
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e) => this.kumar(e)}
            />
          </lable>
          <lable for="password" style={{ width: "25%" }}>
            Password:
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={(e) => this.kumar(e)}
            />
          </lable>
          <button
            onClick={this.Login}
            className="btn btn-primary w-20 mt-2"
            style={{ width: "25%" }}
          >
            Login
          </button>

          <Link to="/listUsers">list users</Link>

          {this.state.warning ? (
            <div
              className="p-2 pl-3 pr-3"
              style={{
                position: "absolute",
                width: "278px",
                height: "64px",
                top: "10%",
                left: "76%",
                borderRadius: "6px",
                color: "#ffff",
                fontWeight: "600",
                backgroundColor: "red",
              }}
            >
              Please fill the input fields and then click to the button to
              proceed.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    abc: state.abc,
    abcusers: state.abcusers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    USER_LOGIN: (abc) => dispatch(actions.USER_LOGIN(abc)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
