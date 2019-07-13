import React from "react";
import PropTypes from "prop-types";
import "./currency-input.css";

export default class CurrencyInput extends React.Component {
  handleChange = e => {
    this.props.onCurrencyValueChange(e.target.value);
  };
  render() {
    return (
      <>
        {this.props.displaySt && (
          <div className="currnecy-input">
            <span>Enter Value in SEK</span>
            <input
              type="number"
              className="currnecy-input--field"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </div>
        )}
      </>
    );
  }
}

CurrencyInput.CurrencyInput = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  displaySt: PropTypes.bool
};
