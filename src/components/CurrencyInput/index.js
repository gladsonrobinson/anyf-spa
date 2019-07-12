import React from "react";
import PropTypes from "prop-types";

export default class CurrencyInput extends React.Component {
  handleChange = e => {
    this.props.onCurrencyValueChange(e.target.value);
  };
  render() {
    return (
      <div className="">
        <input
          type="number"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

CurrencyInput.CurrencyInput = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
