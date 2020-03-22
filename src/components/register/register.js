import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

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
                onChange={(e)=>this.setState({username: e.target.value})}
                name="username"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={(e)=>this.setState({password: e.target.value})}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              console.log(name)
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {/* คำสั่งบรรทัดนี้ จะใช้เมื่อเราต้องการเช็คว่า สิ่งที่ User พิมพ์เข้ามา ถูกจัดเก็บเข้าไปที่ state หรือไม่ โดยการแสดงที่หน้าจอ */}
            <span>#Debug: {JSON.stringify(this.state)}</span>
            
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
                    this.props.history.goBack();
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
