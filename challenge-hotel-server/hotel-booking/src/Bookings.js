import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import FormBooking from "./components/FormBooking";
import NotFound from "./components/NotFound";
import {
  get_all_bokings,
  create_one_boking,
  edit_one_boking,
  delete_one_boking,
  read_one_bokings
} from "./components/apiRest";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      massegeError: "",
      isTrue: true,
      notFound: 200
    };
  }
  componentDidMount() {
    setTimeout(
      () =>
        get_all_bokings().then(res => {
          this.setState({
            data: res
          });
        }),
      5000
    );
  }

  search = (id, e) => {
    e.preventDefault();
    read_one_bokings(id).then(res => {
      if (res.name === "CastError") {
        this.setState({
          notFound: 404
        });
      }
      this.setState({
        data: [res]
      });
    });

    console.info("TO DO!", id);
  };
  addCustomer = e => {
    const data = this.state.data.slice();
    // e.id = Number(data[data.length - 1].id) + 1;

    if (
      e.title &&
      e.firstName &&
      e.surname &&
      e.roomId &&
      e.email &&
      e.email.includes("@") &&
      e.checkOutDate &&
      e.checkInDate
    ) {
      data.push(e);
      this.setState({ data: data, massegeError: "" });
      create_one_boking(e);
    } else {
      return this.setState({
        massegeError: "Sorry there are any fields are empty or Error"
      });
    }
  };

  toMakeSort = n => {
    let data = this.state.data.slice();
    // let content = n.target.name;
    // console.log(n.target.index);
    if (this.state.isTrue) {
      let newSort = data.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
      console.log(newSort);

      this.setState({
        data: newSort,
        isTrue: !this.state.isTrue
      });
    } else {
      let newSort = data.sort((a, b) => (a.firstName < b.firstName ? 1 : -1));
      console.log(newSort);
      this.setState({
        data: newSort,
        isTrue: !this.state.isTrue
      });
    }
  };
  deleteCostumer = id => {
    delete_one_boking(id);
    const data = this.state.data.slice();
    data.splice(id, 1);
    this.setState({ data });
  };
  render() {
    return this.state.notFound === 404 ? (
      <NotFound />
    ) : (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults
            results={this.state.data}
            massegeError={this.state.massegeError}
            toMakeSort={this.toMakeSort}
            isTrue={this.state.isTrue}
            deleteCostumer={this.deleteCostumer}
          />
          <FormBooking add={this.addCustomer} />
        </div>
      </div>
    );
  }
}
