import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <ul className="Navigation">
                <li className="Navigation__item Navigation__item--home"><Link to="homeTimeline">ホーム</Link></li>
                <li className="Navigation__item Navigation__item--mentions"><Link to="mentionsTimeline">リプライ</Link></li>
                <li className="Navigation__item Navigation__item--lists"><Link to="lists">リスト</Link></li>
            </ul>
        );
    }
}
