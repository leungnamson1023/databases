import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="message">
    <p>{ message.username }</p>
    <p>{ message.message }</p>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    username: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default Message;
