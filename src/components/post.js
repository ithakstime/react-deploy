import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Footer from "./footer";
import update from "../img/update.jpg";
import Draw from "./drawer";

class Post extends Component {
  render() {
    return (
      <div>
        <Draw/>
        <div className="container-fluid px-0 ">
          <img
            src={update}
            className="img-responsive header-img"
            alt="agro-based"
          />
        </div>
        <div className="container">
          <div className="row welcome padding text-center">
            <div className="col-md-12">
              <h1 className="display-4">Updates</h1>
            </div>
            <hr />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="sticky-top" style={{ top: "2vh" }}>
                  <div className="container-fluid" id="fixed">
                    <a
                      href="http://g.page/haksinterlance"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-google"
                        style={{ color: "#de5246" }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
                    <a
                      href="https://www.facebook.com/haksinterlance/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fa fa-2x fa-facebook-square"
                        style={{ color: `#4867AA` }}
                        aria-hidden="true"
                      ></i>
                    </a>
                    <br />
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
                    <br />
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
                    <br />
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
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="haksinterlance"
                />
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
export default Post;
