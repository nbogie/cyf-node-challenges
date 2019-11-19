import React, { Component } from "react";
import { postQuotesSearch, getQuotesSeacrh } from "./getApi";
export default class Search extends Component {
  state = {
    word: "",
    search: "",
    results: [],
    marck: "",
    resultesMark: []
  };
  onChange = e => {
    let word = e.target.value;
    this.setState({
      word: word
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      search: this.state.word,
      marck: this.state.word,
      word: ""
    });
    postQuotesSearch(this.state.word);
    getQuotesSeacrh().then(res => {
      this.setState({ results: res });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action="/quotes/search/" method="post">
          <input onChange={this.onChange} type="text" name="search" id="" />
          <input type="submit" id="" />
        </form>

        {this.state.results.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Author</th>
                <th scope="col">Quotes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.results.map((item, index) => {
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
        ) : null}
      </div>
    );
  }
}
