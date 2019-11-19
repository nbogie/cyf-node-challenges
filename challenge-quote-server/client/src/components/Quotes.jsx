import React, { Component } from "react";
import { getQuotes } from "./getApi";
export default class Quotes extends Component {
  state = {
    quotes: []
  };
  componentDidMount = () => {
    getQuotes().then(res => {
      this.setState({ quotes: res });
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Author</th>
              <th scope="col">Quotes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.quotes.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.author}</td>
                  <td>{item.quote}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
