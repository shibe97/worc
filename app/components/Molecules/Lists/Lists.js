import React, { Component } from 'react';
import { Link } from 'react-router';
import Loading from '../../Atoms/Loading/Loading';

export default class Lists extends Component {

  componentDidMount() {
    this.props.requestGetList();
  }

  render() {
    if (this.props.gettingList) {
      return (
        <div className="List">
          <Loading />
        </div>
      );
    }
    return (
      <ul className="List">
        {
          this.props.list.map((item, index) => (
            <li className="List__item" key={index}>
              <Link to={`/lists/${item.id_str}/${encodeURIComponent(item.name)}`}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    );
  }
}
