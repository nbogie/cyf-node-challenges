import React, { Component } from "react";
import * as moment from "moment";
import Sort from "./Sort";
export default class SearchResults extends Component {
  state = {
    indexRow: null
  };
  addClass = e => {
    this.setState({
      indexRow: this.state.indexRow === e ? null : e
    });
  };

  render() {
    const {
      results,
      massegeError,
      toMakeSort,
      isTrue,
      deleteCostumer
    } = this.props;
    return results.length <= 0 ? (
      <div className="container">
        {" "}
        <div id="container-loading">
          <h1 className="title">Loading</h1>
          <div className="loading">
            <div className="loading">
              <div className="loading" />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th name="id" scope="col">
                #
              </th>
              <th scope="col">Title</th>
              <th value="firstName" scope="col">
                First Name
              </th>
              <th scope="col">surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">Day</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            <Sort toMakeSort={toMakeSort} isTrue={isTrue} />
            {results.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <tr
                    className={
                      this.state.indexRow === index ? "selected" : null
                    }
                  >
                    <th onClick={() => this.addClass(index)} scope="row">
                      {index + 1}
                    </th>
                    <td className="text-capitalize">{item.title}</td>
                    <td className="text-capitalize">{item.firstName}</td>
                    <td className="text-capitalize">{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.roomId}</td>
                    <td>{item.checkInDate}</td>
                    <td>{item.checkOutDate}</td>
                    <td>
                      {moment(item.checkOutDate).diff(item.checkInDate, "day")}
                    </td>
                    <td>
                      <i className="fas fa-pencil-alt" />
                    </td>
                    <td onClick={() => deleteCostumer(item._id)}>
                      <i className="fas fa-trash-alt" />
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
        {massegeError ? (
          <div className="text-center text-danger">{massegeError}</div>
        ) : null}
      </div>
    );
  }
}
