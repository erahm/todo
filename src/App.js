import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./app.scss";

export default () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}