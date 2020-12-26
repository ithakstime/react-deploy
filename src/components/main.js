import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./products";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";
import GoogleFormSend from "./send";
import Gallery from "./Gallery";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contact" component={Contact} />
    <Route path="/post" component={Post} />
    <Route path="/send" component={GoogleFormSend} />
    <Route path="/Gallery" component={Gallery} />
  </Switch>
);

export default Main;
