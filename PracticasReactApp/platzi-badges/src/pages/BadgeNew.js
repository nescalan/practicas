import React, { Component } from "react";

//import Styles
import "./styles/BadgeNew.css";

//import Components and Images
import header from "../images/badge-header.svg";
import Badege from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  state = { form: {} };

  handleChange = (e) => {
    this.setState({
      ...this.state.form,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badege
                firstName="Ing. Nelson"
                lastName="Gonzalez"
                twitter="lurkie"
                jobTitle="Frontend Engineer"
                avatarUrl="https://i.postimg.cc/wvFNQkkn/Marco.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
