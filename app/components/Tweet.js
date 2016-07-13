import React, { Component } from 'react';

export default class Tweet extends Component {
    returnLinkedText(text, urls = []) {
        let str = text;
        urls.reverse().forEach((url) => {
            str = str.substr(0, url.indices[0]) + `<a href="${url.url}" target="_blank" >${url.display_url}</a>` + str.substr(url.indices[1]);
        });
        return str;
    }

    render() {
        const {tweet} = this.props;
        return (
            <li className="List__item">
                <dl>
                    <dt>
                        <span className="List__name">{tweet.user.name}</span>
                        <span className="List__screenName ml5px">@{tweet.user.screen_name}</span>
                    </dt>
                    <dd dangerouslySetInnerHTML={{__html : this.returnLinkedText(tweet.text, tweet.entities.urls)}}></dd>
                </dl>
            </li>    
        );
    }
}
