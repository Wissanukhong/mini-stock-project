import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Stock from "./components/stock/stock";
import { server, YES } from "./constants";


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

export default class App extends Component {
  redirectToLogin = () => {
    return <Redirect to="login" />;
  };

  render() {
    return (
      <Router>
        <div>
          { isLoggedIn() && <Header />} 
          { isLoggedIn() && <Menu />}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/stock" component={Stock} />

          <Route exact={true} path="/" component={this.redirectToLogin} />
          {/* <Route path='*' exact={true} component={this.redirectToLogin} /> */}
          { isLoggedIn() && <Footer />}
        </div>
      </Router>
    );
  }
}
