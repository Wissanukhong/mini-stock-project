import React, { Component } from "react";
import { login } from "./../../actions/login.action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // ShowError Function
  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h4>
          <i className="icon fa fa-ban" /> Error!
        </h4>{" "}
        Incorrect information
      </div>
    );
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Login Stock</b>
          </a>
        </div>
        {/* /.login-logo */}
        <div
          className="login-box-body"
          style={{ background: "whitesmoke", borderRadius: 10 }}
        >
          <p className="login-box-msg">Sign in to start your session</p>
          <form>
            <div className="form-group has-feedback">
              <input
                onChange={e => this.setState({ username: e.target.value })}
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {/* เอาไว้สำหรับ ShowError โดยการเรียกใช้ Function */}
            {/* Ternery condition */}
            {this.props.loginReducer.isError ? this.showError() : null}

            {/* Login */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.login(this.props.history, this.state);
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* register */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={() => this.props.history.push("/register")}
                  type="submit"
                  style={{ marginTop: 8 }}
                  className="btn btn-block btn-default"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// shurtcut "rxmap"
const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = dispatch => ({
  login
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
