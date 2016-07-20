import React, { Component } from 'react';
import Tweet from './Tweet';
import Modal from 'react-awesome-modal';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retweetModal : false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }

    returnTimeline(timeline) {
        if (timeline.length > 0) {
            return timeline.map((item, index) => {
                return <Tweet tweet={item} key={index} dispatch={this.props.dispatch} />;
            });
        }
    }

    render() {
        if (this.props.gettingTimeline) {
            return (
                <div className="List">
                    <div className="Loading" />
                </div>
            );
        }
        return (
            <div>
                <ul className="List">
                    {this.returnTimeline(this.props.timeline)}
                </ul>
                <Modal visible={this.state.retweetModal} width="300" height="120" effect="fadeInDown">
                    <div className="Modal">
                        <p className="Modal__title">Are you sure you wanna retweet?</p>
                        <div className="Modal__actions mt20px">
                            <input className="Button Button__submit" type="button" value="retweet" />
                            <a className="ml20px" href="javascript:void(0);">cancel</a>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
