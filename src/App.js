import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import MockApi from "./apis/MockApi";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isRegisterd, setIsRegisterd] = useState(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1028734546309-p2nse9h64gce19kcspb9pk94igso7nft.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);
  useEffect(() => {
    if (auth) {
      setIsSignedIn(auth.isSignedIn.get());
      setUserId(auth.currentUser.get().getId());
      auth.isSignedIn.listen(onAuthChange);
    }
  }, [auth]);
  // reduce functions
  const onAuthChange = () => {
    setIsSignedIn(auth.isSignedIn.get());
  };
  // sign in and out
  const onSignInClick = () => {
    auth.signIn();
  };
  const onSignOutClick = () => {
    auth.signOut();
  };
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div
          onClick={onSignOutClick}
          class="ui animated fade button red google"
          tabindex="0"
        >
          <div class="visible content">
            <i className="google icon"></i>
            Sign Out
          </div>
          <div class="hidden content">so soon?</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={onSignInClick}
          class="ui animated fade button red google"
          tabindex="0"
        >
          <div class="visible content">
            <i className="google icon"></i>
            Sign In With Google
          </div>
          <div class="hidden content">Join Us</div>
        </div>
      );
    }
  };
  //************************Sign in***********************************/
  return (
    <BrowserRouter>
      <div className="ui container">
        <Navbar
          userStatus={isSignedIn}
          clientStatus={isRegisterd}
          renderAuthButton={renderAuthButton}
        />
        <Switch>
          <Route exact path="/">
            {isSignedIn ? <Redirect to="/register" /> : <LandingPage />}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
