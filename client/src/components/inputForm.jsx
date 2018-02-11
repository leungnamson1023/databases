import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      val: e.target.value,
    });
  }

  handleClick() {
    this.props.onSubmit(this.state.val);
    this.setState({
      val: '',
    });
  }

  render() {
    return (
      <div className={this.props.classNameLabel}>
        <input value={this.state.val} onChange={this.handleChange} />
        <button onClick={this.handleClick}>{this.props.buttonLabel}</button>
      </div>
    );
  }
}

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired
};

export default InputForm;
