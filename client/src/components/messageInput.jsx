import React from 'react';
import PropTypes from 'prop-types';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleClick() {
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className="message-input">
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}

MessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageInput;
