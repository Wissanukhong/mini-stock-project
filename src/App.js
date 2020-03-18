import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Menu/>
      <Login/>
      <Footer/>
    </div>

    );
  }
}
