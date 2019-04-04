import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./login/Login";
import Users from "./users/Users";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }
}

export default App;
