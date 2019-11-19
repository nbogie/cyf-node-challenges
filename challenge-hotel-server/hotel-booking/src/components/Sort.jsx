import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default class Sort extends Component {
  render() {
    const { toMakeSort, isTrue } = this.props;
    return (
      <React.Fragment>
        <tr>
          <th name="id" scope="row">
            <span name="id" onClick={n => toMakeSort(n)}>
              Sort{" "}
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </th>
          <td>
            <span name="title" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="firstName" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="surname" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td name="email" onClick={n => toMakeSort(n.target.name)}>
            <span>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="roomId" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="checkInDate" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="checkOutDate" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
          <td>
            <span name="Day" onClick={n => toMakeSort(n)}>
              Sort
              {isTrue ? (
                <i className="fas fa-sort-up" />
              ) : (
                <i className="fas fa-sort-down" />
              )}
            </span>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
