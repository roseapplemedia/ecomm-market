import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./app.css";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
