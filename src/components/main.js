import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./products";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";
import ContactFor from "./google";
import GoogleFormSend from "./googleFormSend";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contact" component={Contact} />
    <Route path="/post" component={Post} />
    <Route path="/google" component={ContactFor} />
    <Route path="/googleFormSend" component={GoogleFormSend} />
  </Switch>
);

export default Main;
