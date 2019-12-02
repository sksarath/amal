import React, { Component } from "react";
import "./footer.scss";
import FooterLogo from "../../images/footer-logo.svg";
import quoteEnd from "../../images/quote-start.svg";
import successIcon from "../../images/success-mail.svg";
import closeIcon from "../../images/close-icon.png";
import axios from 'axios';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actorList: [
        "Rajinikanth",
        "Kamal Haasan",
        "Ajith Kumar",
        "Vijay",
        "Suriya",
        "Vikram",
        "Karthi",
        "Dhanush",
        "Vijay Sethupathi",
        "Sivakarthikeyan",
        "T.R. Silambarasan",
        "Arya",
        "Jiiva"
      ],
      showModal: false,
      email: "",
      selectedActors: {},
      errorMsg: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubscribeBtn = this.handleSubscribeBtn.bind(this);
    this.handleCloseModalBtn = this.handleCloseModalBtn.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.handleSubscribeAPI = this.handleSubscribeAPI.bind(this);
  }
  handleSubscribeBtn() {
    if (this.formValidation()) {
      let selectedActors = this.state.selectedActors;
      let actors = [];
      if (Object.keys(selectedActors).length) {
        actors = Object.keys(selectedActors).filter(item => {
          return selectedActors[item];
        });
        console.log("actors", actors);
      }
      this.handleSubscribeAPI(actors);
    } else {
      this.setState({
        errorMsg: "Please enter a valid email"
      });
    }
  }
  formValidation() {
    let email = this.state.email;
    let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
    if (email && regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  handleSubscribeAPI(actors) {
    axios.post('/api/sample', {
      email: this.state.email,
      selectedActors: actors
    }).then(res => {
      console.log("response", res);
      this.setState({
        showModal: true,
        errorMsg: "",
        selectedActors: {}
      });
    }).catch(error => {
      console.log('error', error);
      this.setState({
        errorMsg: "Failed due to technical reasons. Please try after sometime",
      });
    })
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.handleSubscribeBtn();
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, () => {
      if(this.state.email == '') {
        this.setState({
          errorMsg: ""
        })
      }
    });
  }
  handleCloseModalBtn() {
    this.setState({
      showModal: false,
      email: ""
    });
  }
  handleCheckboxChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      selectedActors: {
        ...this.state.selectedActors,
        [name]: value
      }
    });
  }
  render() {
    let { actorList, showModal, email, errorMsg} = this.state;
    return (
      <div>
        <footer className="footer-wrapper">
          <div className="relative max-width-2">
            <div className="">
              <div className="max-width relative">
                <h1 className="comm-heading">
                  Get latest updates on<br></br>
                  your favourite stars in seconds <span role="img">⚡</span>
                </h1>
                <label className="comm-lab">Choose your favourites</label>
                <ul className="badge-list">
                  {actorList &&
                    actorList.map((item, index) => {
                      return (
                        <li key={index}>
                          <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              name={item}
                              onChange={this.handleCheckboxChange}
                            />
                            <span className="badge">{item}</span>
                          </label>
                        </li>
                      );
                    })}
                </ul>
                <div className="subscribe-form">
                  <div className="custom-input-field">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="custom-input"
                      value={email}
                      name="email"
                      autoComplete="off"
                      onChange={this.handleInputChange}
                      onKeyDown={this.handleKeyDown}
                    />
                    <button
                      className="form-submit-btn"
                      onClick={this.handleSubscribeBtn}
                    >
                      Get Started
                    </button>
                  </div>
                  {errorMsg && errorMsg.length && (
                    <div className="error-msg">{errorMsg}</div>
                  )}
                </div>
                <div className="disclaimer">
                  Get the newsletters about the latest releases. No spamming.
                  Promise.
                </div>
                <div className="footer-logo">
                  <img src={FooterLogo} />
                </div>
              </div>
              <div className="help-msg">
                <a href="mailto:hi@runuptox.com" target="_blank">
                  Help us
                </a>{" "}
                improve the list, tell us what is missing.
              </div>
            </div>
            <img src={quoteEnd} className="quote-end" />
          </div>
        </footer>
        <div className={showModal ? "show-modal cus-modal" : "cus-modal"}>
          <div className="cus-modal-content">
            <span className="close-button" onClick={this.handleCloseModalBtn}>
              <img src={closeIcon} />
            </span>
            <div className="modal-form">
              <div className="success-icon-holder">
                <img src={successIcon} />
              </div>
              <div className="modal-body-conent">
                <h2 className="heading-lab">All Set machha/machhe!</h2>
                <p className="info-lab">
                  All latest information abut your favourites <br />
                  will be mailed to {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
