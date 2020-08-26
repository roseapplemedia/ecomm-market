import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./app.css";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
