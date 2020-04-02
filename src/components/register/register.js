import React, { Component } from "react";
// import { httpClient } from "./../../utils/HttpClient";
// import { server } from "../../constants";
// ถ้ามีคำว่า Default  {ไม่ต้องมี} แต่ถ้าไม่เป็น Default จะต้องมี {ปีกกาด้วย}
import { connect } from "react-redux";
import { register } from "./../../actions/register.action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // ShowError Function
  showError = ()=>{
    return (
      <div className="alert alert-danger alert-dismissible">
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect information
    </div>
    )
  }

  // การประกาศตัวแปรให้กับ function โดยการใช้ arrow function
  // onClickRegister = () => {
  // จะต้องทำการตรวจเช็คทุกครั้งว่า api ถูกยิงไปที่ postman ถูกต้องไหม ถ้าไม่ถูกต้อง ต้องไปเช็คที่ฝั่ง Node ก่อน ว่ามีความถูกต้องไหม ถ้าถูกต้องก็กลับมาเช็คที่ Axios อีกที ว่าถูกต้องไหม
  // Axios.post("http://localhost:8085/api/v2/authen/register", this.state).then(response=>{
  //   alert(JSON.stringify(response.data))
  // })
  //   httpClient.post(server.REGISTER_URL, this.state).then(response => {
  //     alert(JSON.stringify(response.data));
  //   });
  // };

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
                onChange={e => this.setState({ username: e.target.value })}
                name="username"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={e => this.setState({ password: e.target.value })}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {/* คำสั่งบรรทัดนี้ จะใช้เมื่อเราต้องการเช็คว่า สิ่งที่ User พิมพ์เข้ามา ถูกจัดเก็บเข้าไปที่ state หรือไม่ โดยการแสดงที่หน้าจอ */}

            {/* เอาไว้สำหรับ ShowError โดยการเรียกใช้ Function */}
            {/* Ternery condition */}
            {this.props.registerReducer.isError ? this.showError() : null}

            {/* Register */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.register(this.props.history, this.state);
                  }}
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

//map state and props shurt rxmap
const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
