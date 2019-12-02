import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("props", this.props);
  }
  render() {
    return <div>Contact Page</div>;
  }
}
