import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header
            className="header-bg"
            title={
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span style={{ color: "#ffffff", fontSize: "20px" }}>
                    HAKStime&nbsp;-&nbsp;
                  </span>
                </strong>
                Sales & Marketing | <br />
                Commodity Trading | Consultancy
              </span>
            }
            scroll
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/googleFormSend">Contact</Link>
              <Link to="/post">Posts</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <span style={{ fontSize: "15px" }}>
                <strong>
                  <span style={{ color: "#000000" }}>
                    HAKStime&nbsp;-&nbsp;
                    <br />
                  </span>
                </strong>
                Sales & Marketing | Commodity Trading | Consultancy
              </span>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/googleFormSend">Contact</Link>
              <Link to="/post">Posts</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
