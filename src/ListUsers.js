import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_USERS } from "./store/actions";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.props.getlist();
  }
  // abc = () => {
  //   return 
  // };
  render() {
    this.props.listuser && console.log(typeof this.props.listuser, "type od ");
    return (
      <div>
        {/* {this.props.listuser &&
          this.props.listuser.forEach((data) => {
            <div>
              <div className="username">{data.username}</div>
              <div className="username">{data.passowrd}</div>
            </div>
          })} */}

        {/* {this.props.listuser && this.abc()} */}



      {this.props.listuser == null
      ? "No Data to show here in this field for you"
      : this.props.listuser.map((key) => {
          //  console.log(key,"key")
          return (
            <div key={key.username}>
              <div key={key.username}>Username: {key.username}</div>
              <div key={key.username}>password: {key.password}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listuser: state.listusers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getlist: () => {
      dispatch(GET_USERS());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
