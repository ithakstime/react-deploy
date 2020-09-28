import React, { Component } from "react";
import moto from "../img/moto.jpg";
import rice from "../img/rice.jpg";
import grains from "../img/grains.jpg";
import sugar from "../img/sugar.jpg";
import gold from "../img/gold.jpg";
import aluminium from "../img/aluminium.jpg";
import constructionsteel from "../img/constructionsteel.jpg";
import ford from "../img/ford.png";
import honda from "../img/honda.png";
import hyundai from "../img/hyundai.png";
import kiamotor from "../img/kiamotor.png";

class Products extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid px-0 ">
          <img
            src={moto}
            className="img-responsive header-img"
            alt="agro-based"
          />
        </div>
        <div className="container padding">
          <div className="row welcome text-center">
            <div className="col-md-12 category">
              <h1 className="display-4">Products</h1>
            </div>
            <hr />
          </div>
        </div>
        <div className="container ">
          <div className="row text-center">
            <div className="col-12 title">
              <h3>Agro Product</h3>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card ">
                <img
                  className="card-img-top"
                  src={rice}
                  alt="#rice"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Rice</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={grains}
                  alt="#grains"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Grains</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={sugar}
                  alt="#sugar"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Sugar</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row text-center">
            <div className="col-12 title">
              <h3>Metal products</h3>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card ">
                <img
                  className="card-img-top"
                  src={gold}
                  alt="#gold"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Gold</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={aluminium}
                  alt="#aluminium"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Aluminium</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={constructionsteel}
                  alt="#constructionsteel"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Construction Steel</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row text-center">
            <div className="col-12 title">
              <h3>Auto Spare parts</h3>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={ford}
                  alt="#ford"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Ford</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={honda}
                  alt="#honda"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Honda</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={hyundai}
                  alt="#hyundai"
                  height="175vh"
                />
                <div className="card-body">
                  <h4 className="card-title">Hyundai</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row padding justify-content-center">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    alt="#kia"
                    src={kiamotor}
                    height="175vh"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Kiamotor</h4>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
