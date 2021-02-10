import React, { Component } from "react";

export default class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.hello ? (
          ""
        ) : (
          <React.Fragment>
            <div className="d-flex align-items-center justify-content-around">
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  position: "absolute",
                  background: "black",
                  opacity: "0.5",
                  top:0,
                  
                }}
                onClickCapture={() =>
                  this.setState({ hello: !this.state.hello })
                }
              ></div>
              <div
                style={{
                  width: "max-content",
                  height: "max-cotent",
                  position: "absolute",
                  opacity: "1",
                  top:"25%",
                  left: "auto",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <div
                    className="popup_box verifier"
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{ postion: "relative" }}
                      className="d-flex justify-content-around"
                    >
                      <h2 className="text-center pt-4 pb-3 ">Verify Details</h2>
                      <h4
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "5px",
                        }}
                        onClick={() => {
                          this.setState({ hello: !this.state.hello });
                        }}
                      >
                        X
                      </h4>
                    </div>
                    <div className="d-flex">
                      <section className="pl-3 pr-2 m-3 ml-3">
                        <div className="p-2">FullName:</div>
                        <div className="p-2">Username:</div>
                        <div className="p-2">Email:</div>
                        <div className="p-2">Password:</div>
                        <div className="p-2">Phone:</div>
                        <div className="p-2">sponsorId:</div>
                        <div className="p-2">Address:</div>
                      </section>

                      <section
                        className="pl-2 pr-3 m-3"
                        style={{ margin: "1rem", marginLeft: "3rem" }}
                      >
                        <div className="p-2">{this.props.data.fullname}</div>
                        <div className="p-2">{this.props.data.username}</div>
                        <div className="p-2">{this.props.data.email}</div>
                        <div className="p-2">{this.props.data.password}</div>
                        <div className="p-2">{this.props.data.phone}</div>
                        <div className="p-2">{this.props.data.sponsorId}</div>
                        <div className="p-2">{this.props.data.address}</div>
                      </section>
                    </div>
                    <button
                      onClick={() => {
                        this.props.register()
                      }}
                      className="btn btn-primary ml-4 mr-4 col-md-10 col-sm-10 col-10 mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
