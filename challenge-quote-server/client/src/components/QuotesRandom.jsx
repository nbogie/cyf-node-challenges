import React, { Component } from "react";
import { getQuotesRandom } from "./getApi";
export default class QuotesRandom extends Component {
  state = {
    random: []
  };
  componentDidMount = () => {
    getQuotesRandom().then(res => this.setState({ random: res }));
  };

  render() {
    console.log(this.state.random);

    return (
      <div id="quotes-random">
        <p>{this.state.random.quote}</p>
        <span>{this.state.random.author}</span>
      </div>
    );
  }
}
