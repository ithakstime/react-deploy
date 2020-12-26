import React, { Component } from "react";
import { Layout, Navigation, Drawer, Header } from "react-mdl";
import { Link } from "react-router-dom";

class Draw extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header
          className="header-bg"
          title={
            <span style={{ fontSize: "15px" }}>
              <strong>
                <span style={{ color: "#ffffff", fontSize: "20px" }}>
                  HAKStime
                </span>
              </strong>
            </span>
          }
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/send">Contact</Link>
            <Link to="/post">Posts</Link>
            <Link to="/Gallery">Gallery</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <span style={{ fontSize: "15px" }}>
              <strong>
                <span style={{ color: "#000000" }}>
                  HAKStime
                  <br />
                </span>
              </strong>
            </span>
          }
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/send">Contact</Link>
            <Link to="/post">Posts</Link>
            <Link to="/Gallery">Gallery</Link>
          </Navigation>
        </Drawer>
      </Layout>
    );
  }
}
export default Draw;
