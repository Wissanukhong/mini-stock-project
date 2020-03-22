import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Stock</b>Register
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
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {/* Register */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
            </div>
            {/* cancel */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.goBack()
                  }}
                  type="submit"
                  style={{ marginTop: 8 }}
                  className="btn btn-block btn-default"
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
