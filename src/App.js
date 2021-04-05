import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
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
        <button onClick={onSignOutClick} className="ui red google button right">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button right">
          <i className="google icon"></i>
          Sign In With Google
        </button>
      );
    }
  };
  //************************Sign in***********************************/
  return (
    <BrowserRouter>
      <div className="ui container">
        <Navbar userStatus={isSignedIn} renderAuthButton={renderAuthButton} />
        <Switch>
          <Route exact path="/">
            <LandingPage userStatus={isSignedIn} />
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
