import React from 'react';

export default ({ children }) => {
  const getTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  return (
    <span className="Tweet__createdAt">{ getTime(new Date(children)) }</span>
  )
};
