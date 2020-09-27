import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import phone from "../img/phone.jpg";
import haks from "../img/haks.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  submituserInquiryForm(e) {
    console.log(this.validateForm());
    e.preventDefault();
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your country.";
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "*Please enter your company.";
    }

    if (!fields["inquiry"]) {
      formIsValid = false;
      errors["inquiry"] = "*Please enter your inquiry.";
    }
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
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
        <div className="row">
          <div className="container pt-4">
            <div className="col-md-6">
              <h2 class="text-center">Inquire Now</h2>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form
                      method="post"
                      name="userInquiryForm"
                      onSubmit={this.submituserInquiryForm}
                    >
                      <label
                        htmlFor="defaultFormRegisterNameEx"
                        className="grey-text"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="defaultFormRegisterNameEx"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.username}
                      </div>
                      <label
                        htmlFor="defaultFormRegisterEmailEx"
                        className="grey-text"
                      >
                        Email ID
                      </label>
                      <input
                        type="text"
                        name="emailid"
                        id="defaultFormRegisterEmailEx"
                        value={this.state.fields.emailid}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.emailid}
                      </div>
                      <label
                        htmlFor="defaultFormRegisterCountryEx"
                        className="grey-text"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="defaultFormRegisterCountryEx"
                        value={this.state.fields.country}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.country}
                      </div>
                      <label
                        htmlFor="defaultFormRegisterMobileNoEx"
                        className="grey-text"
                      >
                        Mobile No
                      </label>
                      <input
                        type="text"
                        name="mobileno"
                        id="defaultFormRegisterMobileNoEx"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.mobileno}
                      </div>
                      <label
                        htmlFor="defaultFormRegisterCompanyEx"
                        className="grey-text"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="defaultFormRegisterCompanyEx"
                        value={this.state.fields.company}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.company}
                      </div>
                      <label
                        htmlFor="defaultFormRegisterInquiryEx"
                        className="grey-text"
                      >
                        Inquiry
                      </label>
                      <input
                        type="text"
                        name="inquiry"
                        id="defaultFormRegisterInquiryEx"
                        value={this.state.fields.inquiry}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.inquiry}
                      </div>
                      <div className="text-center mt-3">
                        <MDBBtn color="secondary" cols="5" type="submit">
                          INQUIRE
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="col-md-6">
              <img
                src={haks}
                alt="haks"
                className="img-responsive"
                width="80%"
              />
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

        <footer>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-xs-12 col-sm-6 col-md-4">
                &copy;2020 HAKS Internationl Lancing
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
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
              <div className="col-xs-12 col-sm-6 col-md-4">
                Powered by <u>HAKS-iT</u>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Contact;
