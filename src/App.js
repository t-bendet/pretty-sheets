import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(undefined);
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
      auth.isSignedIn.listen(onAuthChange);
    }
  }, [auth]);
  const onAuthChange = () => {
    console.log("o.k");
    setIsSignedIn(auth.isSignedIn.get());
    //user id
    console.log(auth.currentUser.get().getId());
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
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In With Google
        </button>
      );
    }
  };
  return (
    <BrowserRouter>
      <div className="ui container">
        {renderAuthButton()}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
