import React from 'react';
import PropTypes from 'prop-types';

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleClick() {
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <div className="username">
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Set Username</button>
      </div>
    );
  }
}

Username.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Username;
