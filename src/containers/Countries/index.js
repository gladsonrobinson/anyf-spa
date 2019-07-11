import { PureComponent } from "react";
import { connect } from "react-redux";
import { getCountryDetailsByName } from "./actions";

const mapStateToProps = state => ({
  ...state.country
});

const mapDispatchToProps = {
  getCountryDetailsByName
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
