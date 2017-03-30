import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Atoms/Loading/Loading';
import styles from './lists.css';

export default class Lists extends Component {

  componentDidMount() {
    this.props.requestGetList();
  }

  render() {
    if (this.props.gettingList) {
      return (
        <div className={styles.lists}>
          <Loading />
        </div>
      );
    }
    return (
      <ul className={styles.lists}>
        {
          this.props.list.map((item, index) => (
            <li className={styles.list} key={index}>
              <Link to={`/lists/${item.id_str}/${encodeURIComponent(item.name)}`}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    );
  }
}
