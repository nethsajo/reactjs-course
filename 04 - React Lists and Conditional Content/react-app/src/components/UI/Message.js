import React from 'react';
import './Message.css';

const Message = function (props) {
  return (
    <div className="message">
      <h2 className="message__text">{props.message}</h2>
    </div>
  );
};

export default Message;
