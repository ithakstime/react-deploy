import React, { Component } from "react";
import "./App.css";
import { Layout,  Content } from "react-mdl";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
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
