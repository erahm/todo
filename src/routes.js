import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoList from "./components/TodoList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default () => {
  return (
    <Switch>
      <Route
        component={SignUp}
        path="/join"
      />
      <Route
        component={SignIn}
        path="/login"
      />
      {/* if logged in */}
      <Route
        component={TodoList}
        path="/"
      />
    </Switch>
  )
}