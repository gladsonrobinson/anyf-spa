import { PureComponent } from "react";
import { connect } from "react-redux";
import { getCountryDetailsByName, onCurrencyValueChange } from "./actions";

const mapStateToProps = state => ({
  ...state.country
});

const mapDispatchToProps = {
  getCountryDetailsByName,
  onCurrencyValueChange
};

class Country extends PureComponent {
  render() {
    return this.props.children({ ...this.props });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
