import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Lists extends Component {

  componentDidMount() {
    this.props.requestGetList();
  }

  render() {
    if (this.props.gettingList) {
      return (
        <div className="List">
          <div className="Loading" />
        </div>
      );
    }
    return (
      <div>
        <ul className="List">
          {
            this.props.list.map((item, index) => (
              <li className="List__item" key={index}>
                <Link to={`/lists/${item.id_str}/${item.name}`}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
