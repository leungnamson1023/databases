import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

const Messages = ({ messages }) => (
  <div className="messages">
    {
      messages.map(m => (<Message message={m} key={m.objectId}/>))
    }
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Messages;
