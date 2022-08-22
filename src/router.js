import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import AuthController from "./Pages/authController";

// my router paths
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-chatapp/login" component={Login} exact />
        <Route path="/react-chatapp/register" component={Register} exact />
        <Route
          path="/react-chatapp/"
          component={(props) => (
            <AuthController {...props}>
              <Route path="/" component={Home} exact />
            </AuthController>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
