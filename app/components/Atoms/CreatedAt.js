import React from 'react';
import moment from 'moment';

export default ({ children }) => (
  <span className="Tweet__createdAt">{ moment(children).fromNow() }</span>
);
