import React, { Component } from "react";
import Header from "../../components/header";
import ListItem from "../../components/listItem";
import CardItem from "../../components/cardItem";
import Footer from "../../components/footer";
import movies from "./movies";
import updates from "./updates";
import quoteStart from "../../images/quote-start.svg";
import "./landingPage.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMovies: movies,
      updates: updates,
    };
  }
  componentDidMount() {}
  render() {
    const { topMovies, updates, showModal } = this.state;
    return (
      <div>
        <Header />
        <div className="relative max-width-2">
          <img src={quoteStart} className="quote-start" />
          <div className="max-width">
            <div className="main-content">
              <div className="heading-section">
                <h1 className="comm-heading">
                  Top movie trailers in Tamil <span role="img">🏆</span>
                </h1>
                <label className="comm-sub-text">Rating updated today</label>
              </div>
              <div className="row-100">
                <div className="left-content">
                  <div className="movie-list-container">
                    {topMovies &&
                      topMovies.map((item, index) => {
                        return <ListItem data={item} key={index} />;
                      })}
                  </div>
                </div>
                <div className="right-content">
                  <label className="comm-lab">UPDATES</label>
                  <div className="update-list-conatiner">
                    {updates &&
                      updates.map((item, index) => {
                        return <CardItem data={item} key={index} />;
                      })}
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer subscribe={this.handleSubscribeBtn}/>
      </div>
    );
  }
}
