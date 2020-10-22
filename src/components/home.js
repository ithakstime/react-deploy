import React, { Component } from "react";
import hakstimeBg from "../img/milkyway.jpg";
import time from "../img/time.jpg";
import agro from "../img/agro.webp";
import automotive from "../img/automotive.webp";
import digi from "../img/digi.webp";
import fuel from "../img/fuel.webp";
import metals from "../img/metals.webp";
import trade from "../img/trade.webp";
import Footer from "./footer"
import { Link } from "react-router-dom";


import Draw from "./drawer";

class Home extends Component {
  render() {
    return (
      <div>
        <Draw/>
        <div className="container-fluid px-0 ">
          <img
            src={hakstimeBg}
            className="img-fluid header-img"
            alt="hakstime-bg"
          />
        </div>
        <div className="container-fluid">
          <div className="row welcome padding text-center">
            <div className="col-md-12">
              <h1 className="display-4">HAKS International Lancing</h1>
              <p className="lead">
                Commodities | Consulting | Sales | Marketing
              </p>
              <hr className="padding"/>
            </div>
          </div>
        </div>
        <div className="container padding ">
          <div className="row">
            <div className="col-md-6">
              <img src={time} alt="time is precious" className="img-fluid img-height " />
            </div>
            <div className="col-md-6">
              <p className="lead mx-auto">Greetings!</p>
              <h1 className="display-4">
                Welcome to HAKS International Lancing
              </h1>
              <p className="lead mx-auto">Time Waits for none!</p>
              <p>
              <Link to="/send">
                <a
                  href="/send"
                  type="button"
                  className="btn btn-dark"
                  aria-hidden="true"
                >
                  CONTACT
                </a></Link>
                
              </p>
              <div className="container wrap">
                <a
                  href="http://g.page/haksinterlance"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-google"
                    style={{ color: `#de5246` }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/haksinterlance/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-facebook-square"
                    style={{ color: "#4867AA" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://twitter.com/haksinterlance"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-twitter-square"
                    style={{ color: "#1DA1F2" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-linkedin-square"
                    style={{ color: "#1DA1F2" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/haksinterlance/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-instagram"
                    style={{ color: "#813db4" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row welcome text-center">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Products & Services</h1>
            </div>
          </div>
        </div>
        <div className="container padding">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <h3>Trade</h3>
              <img
                src={trade}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Agro</h3>
              <img
                src={fuel}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Metals</h3>
              <img
                src={metals}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Fuel</h3>
              <img
                src={agro}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Automotive</h3>
              <img
                src={automotive}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Digitalization</h3>
              <img
                src={digi}
                className="img-responsive"
                alt="commodity trading"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid wrapper mb-5 padding">
          <a
            href="http://g.page/haksinterlance"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className="fa fa-google"
              style={{ color: "#de5246" }}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.facebook.com/haksinterlance/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className="fa fa-facebook-square"
              style={{ color: "#4867AA" }}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://twitter.com/haksinterlance"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className="fa fa-twitter-square"
              style={{ color: "#1DA1F2" }}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/company/14462820/admin/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className="fa fa-linkedin-square"
              style={{ color: "#1DA1F2" }}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.instagram.com/haksinterlance/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className="fa fa-instagram"
              style={{ color: "#813db4" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Home;
