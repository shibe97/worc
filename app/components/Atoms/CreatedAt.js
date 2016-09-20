import React from 'react';
import moment from 'moment';

export default ({ children }) => (
  <span className="Tweet__createdAt ml5px">{ moment(children).fromNow() }</span>
);
