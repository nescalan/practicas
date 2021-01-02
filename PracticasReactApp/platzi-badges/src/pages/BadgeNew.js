import React, { Component } from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badege from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  state = {};
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
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
