import React, { Component } from "react";

class Login extends Component {
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

            {/* Login */}
            <div className="row">
              <div className="col-xs-12">
                <button
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
                  onClick={()=>this.props.history.push("/register")}
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

export default Login;
