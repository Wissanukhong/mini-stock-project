import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Stock from "./components/stock/stock";
import { server, YES } from "./constants";
import {setApp} from "./actions/app.action"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

// Protected Route เอาไว้สำหรับป้องกัน User ที่ยังไม่ได้ Login เข้ามาดูข้อมูลต่างๆ ได้
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  // componentDidMount จะเอาไว้สำหรับเรียกใช้อะไรบางอย่างเมื่อเราทำการ Load เสร็จเรียบร้อยแล้ว
  componentDidMount() {
    this.props.setApp(this);
  }

  redirectToLogin = () => {
    return <Redirect to="login" />;
  };

  render() {
    return (
      <Router>
        <div>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* จะเห็นว่าถ้าหากเราเพิ่ม SecuredRoute โดยการเรียกใช้ จะทำให้ไม่สามารถเข้าหน้าเว็บโดยตรงได้ ถ้าเรายังไม่ได้ทำการ Login*/}
            <SecuredRoute path="/stock" component={Stock} /> 
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route path='*' exact={true} component={this.redirectToLogin} />
          </Switch>
          {isLoggedIn() && <Footer />}
        </div>
      </Router>
    );
  }
}

// shurt cut is rxmap that will be create this element below
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  setApp
}

// shurt cut is connect is will be create this element
export default connect(mapStateToProps, mapDispatchToProps)(App)