import React, { Component } from "react";
import { connect } from "react-redux";
import "./Signup.css";
import * as actions from "./store/actions";
import Verification from "./Verification";
import verification from "./Verification";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 
        {
          username: "",
          password: "",
          email: "",
          fullname: "",
          phone: "",
          verifyPassword: "",
          sponsorId: "",
          address: "",
        },
      
      terms: false,
      validation: false,
      type: "",
      msg: "",
      view: false,
    };
    this.abc = {
      kumar: "",
    };
  }

  componentDidMount() {
    this.props.statefetch();
  }
  validation = (data) => {
    if (this.state.fullname.length <= 3) {
      this.setState({ type: "fullname" });
      this.setState({ msg: "please fill propper name" });

      this.setState({ validation: false });
    } else if (this.state.password != this.state.verifyPassword) {
      this.setState({ type: "password" });
      this.setState({ msg: "passwords not matching" });

      console.log("Passwords Not matching");
      this.setState({ validation: false });
    } else if (this.state.username.length <= 3) {
      console.log("please enter a valid username");

      this.setState({ type: "username" });
      this.setState({ msg: "please fill proper username" });
      this.setState({ validation: false });
    } else if (
      this.state.email.indexOf("@") <= 1 ||
      this.state.email.indexOf(".") < this.state.email.indexOf("@") + 3 ||
      this.state.email.indexOf(".") + 2 >= this.state.email.length
    ) {
      this.setState({ type: "email" });
      this.setState({ msg: "please fill propper email" });
      console.log("enter valid email");
      this.setState({ validation: false });
    } else if (
      this.state.password != this.state.verifyPassword ||
      this.state.password.length < 8
    ) {
      if (this.state.password == "" || this.state.verifyPassword == "") {
        console.log("Passwords not matching");
        this.setState({ type: "password" });
        this.setState({ msg: "passwords no to be left blank" });
      } else if (this.state.password.length < 8) {
        console.log("Password must be grater than 8");
        this.setState({ type: "password" });
        this.setState({ msg: "passwords should be greater than  8" });
      } else {
        console.log("Passwords not matching");
      }
    } else {
      this.setState({ validation: true }, () => {
        console.log(this.state.validation);
      });
      return data;
    }
  };

  signup = (e) => {
    // this.props.registerUser(this.state);
    
    this.props.regsiteruser(this.state.user);
    console.log();
  };

  valuefields = (e) => {
    this.setState({ msg: "" });
    if (e.target.name == "terms") {
      this.setState({ [e.target.name]: !this.state.terms });
    } else {
      let abc = [e.target.name];

      this.setState({
        user:({...this.state.user,[e.target.name]: e.target.value }),
      });
    }
  };

  hideview = () => {
    if (this.validation(this.state)) {
      console.log(this.validation(this.state))
      this.setState({ view: !this.state.view });
    } else {
    }
  };

  render() {
    return (
      <div className="container" style={{ height: "100vh", opacity: "1" }}>
        <div
          className="row main_box flex-column justify-content-center align-content-center"
          style={{ height: "100%" }}
        >
          <h2 className="text-center p-0">SignUp </h2>
          <div className="col-sm-8 col-md-6" style={{ marginTop: "-0" }}>
            <label className="label">UserName:</label>
            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="username"
              name="username"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "username" && this.state.msg}
            </p>
            <label className="label">FullName:</label>
            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="FullName"
              name="fullname"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "fullname" && this.state.msg}
            </p>
            <label className="label">Phone:</label>
            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Phone"
              name="phone"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "phone" && this.state.msg}
            </p>
            <label className="label">Email:</label>

            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Email"
              name="email"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "email" && this.state.msg}
            </p>
            <label className="label">Password:</label>

            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "password" && this.state.msg}
            </p>
            <label className="label">Verify Password:</label>

            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Verify Password"
              name="verifyPassword"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "password" && this.state.msg}
            </p>
            <label className="label">Sponsor Id:</label>
            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Sponser Id"
              name="sponsorId"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "" && this.state.msg}
            </p>

            <label className="label">Address:</label>
            <input
              onChange={(e) => {
                this.valuefields(e);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Sponser Id"
              name="address"
            />
            <p style={{ color: "red" }}>
              {this.state.type == "" && this.state.msg}
            </p>
            <label className="d-flex fog">
              <input
                onChange={(e) => {
                  this.valuefields(e);
                }}
                type="checkbox"
                value=""
                name="terms"
                className="form-control col-md-1 col-1 fog"
                style={{
                  width: "0px",
                  height: "18px",
                  padding: "0px",
                  outline: "0px solid white",
                }}
              />{" "}
              <p className="text-center"> Agree Terms & Conditions</p>
            </label>
            <button
              className="btn btn-primary col-md-12"
              onClick={() => this.setState({ view: !this.state.view })}
              disabled={!this.state.terms}
              // onFocus={()=>this.setState({view:!this.state.view},()=>{
              //   console.log("focuser")
              // })}
              onFocusCapture={() => this.setState({ view: !this.state.view })}
            >
              SignIn
            </button>
          </div>
          {/* <div style={{width:'100%', height:"100%",position:'absolute',background:"black", opacity:'0.5'}}></div>
          <div style={{width:'100%', height:"100%",position:'absolute',opacity:'1',top:'0',left:'0'}} className="d-flex justify-content-center align-items-center"> */}

          {this.state.view && (
            <Verification
              data={this.state.user}
              close={() => {
                this.hideview();
              }}
              register={()=>{this.signup()}}
            />
          )}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    statefetch: () => {
      dispatch(actions.GET_USERS());
    },
    regsiteruser: (data) => {
      dispatch(actions.USER_SIGNUP(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
