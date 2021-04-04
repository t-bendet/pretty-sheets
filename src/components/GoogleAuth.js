import React from "react";

//uses gapi with an script tag in index.html
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1028734546309-p2nse9h64gce19kcspb9pk94igso7nft.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  // listen if signin status changes
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    //user id
    console.log(this.auth.currentUser.get().getId());
  };
  // sign in and out
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  // renders sign in button if not signed in
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In With Google
        </button>
      );
    }
  }
  render() {
    return (
      <div>
        <h1>GoogleAuth</h1>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
