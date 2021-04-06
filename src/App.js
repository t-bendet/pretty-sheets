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
import Clients from "./components/Clients";
import Register from "./components/Register";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [auth, setAuth] = useState(null);
  const [clientData, setClientData] = useState(null);
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
      setClientData(auth.currentUser.get().getBasicProfile());
      auth.isSignedIn.listen(onAuthChange);
    }
  }, [auth]);
  useEffect(() => {}, [clientData]);
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
          className="ui animated fade button red google"
          tabIndex="0"
        >
          <div className="visible content">
            <i className="google icon"></i>
            Sign Out
          </div>
          <div className="hidden content">so soon?</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={onSignInClick}
          className="ui animated fade button red google"
          tabIndex="0"
        >
          <div className="visible content">
            <i className="google icon"></i>
            Sign In With Google
          </div>
          <div className="hidden content">Join Us</div>
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
            {isSignedIn ? <Redirect to={`/clients`} /> : <LandingPage />}
          </Route>
          <Route
            exact
            path="/clients"
            component={() => (
              <Clients
                clientData={clientData}
                setIsRegisterd={setIsRegisterd}
              />
            )}
          />
          <Route
            path="/register"
            component={() => <Register data={clientData} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
//
