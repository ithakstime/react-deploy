import React, { Component } from "react";
import Draw from "./drawer";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Draw />
        <div className="container-fluid">
          <div className="row padding pt-5">
            <div className="col-md-12">
              <h1>
                Under construction...{" "}
                <p className="lead">We will update soon;)</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
