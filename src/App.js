import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Stock from "./components/stock/stock";
import { server, YES } from "./constants";
import {setApp} from "./actions/app.action"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/stock" component={Stock} />

          <Route exact={true} path="/" component={this.redirectToLogin} />
          {/* <Route path='*' exact={true} component={this.redirectToLogin} /> */}
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