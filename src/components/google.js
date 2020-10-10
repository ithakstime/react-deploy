import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import haks from "../img/haks.jpg";
import phone from "../img/phone.jpg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const config = {
  cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfqIJGLOakrqak1od66bUHwpY7Ftn9YJVMTMTi021LUziofYw/formResponse",
};


class ContactFor extends React.Component {
  state = {
    inputs: {
      name: { id: 1442417937, value: "" },
      emailid: { id: 578512623, value: "" },
      country: { id: 1141971151, value: "" },
      mobileno: { id: 1480016484, value: "" },
      company: { id: 1602135448, value: "" },
      inquiry: { id: 2068787174, value: "" },
    },
    errors: {},
  };

  doSubmit =  (e) => {
    e.preventDefault();
    const { inputs } = this.state;

    const formData = new FormData();
    const _ = require("underscore");

    _.map(inputs, (item) => {
      formData.append(`entry.${item.id}`, item.value);
    });
      axios.post({
        url: `${config.cors}${config.formUrl}`,
        method: "post",
        data: formData,
        responseType: "json",
      }).then(Swal.fire("Inquiry sent successfully!"));
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { inputs } = this.state;
    inputs[name].value = value;
    
    this.setState({
      inputs,
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid px-0 ">
          <img
            src={phone}
            className="img-responsive header-img"
            alt="agro-based"
          />
        </div>

        <div className="container">
          <div className="row welcome text-center">
            <div className="col-md-12">
              <h1 className="display-4">Contact</h1>
            </div>
            <hr />
          </div>
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-6">
              <h2 class="text-center">Inquire Now</h2>
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <form name="contact-form" onSubmit={this.doSubmit}>
                      <label htmlFor="name" className="grey-text">
                        Name
                      </label>
                      <input
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.name}
                      </div>
                      <label htmlFor="emailid" className="grey-text">
                        Email ID
                      </label>
                      <input
                        name="emailid"
                        id="emailid"
                        onChange={this.handleChange}
                        type="email"
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.emailid}
                      </div>
                      <label htmlFor="mobileno" className="grey-text">
                        Mobile No
                      </label>
                      <input
                        name="mobileno"
                        id="mobileno"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.mobileno}
                      </div>
                      <label htmlFor="country" className="grey-text">
                        Country
                      </label>
                      <input
                        name="country"
                        id="country"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.country}
                      </div>
                      <label htmlFor="company" className="grey-text">
                        Company
                      </label>
                      <input
                        name="company"
                        id="company"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.company}
                      </div>
                      <label htmlFor="inquiry" className="grey-text">
                        Inquiry
                      </label>
                      <textarea                      
                        name="inquiry"
                        id="inquiry"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg" style={{ color: "red" }}>
                        {this.state.errors.inquiry}
                      </div>
                      <MDBBtn color="secondary" type="submit">
                        SEND
                      </MDBBtn>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="col-md-6 pt-4">
              <img src={haks} alt="haks" className="img-fluid" />
              <div className="col-md-6 wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFor;
