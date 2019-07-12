import React from "react";
import "./wrapper.css";
import PropTypes from "prop-types";
import { utility } from "../../services";
const { round } = utility;

const ListItem = ({ item, currencyInput }) => {
  return (
    <div className="ctry-list-list__items">
      <div className="ctry-list-list__item">
        <div>
          Name: <span className="ctry-list-list__item--value">{item.name}</span>
        </div>
        <div>
          Capital:{" "}
          <span className="ctry-list-list__item--value">{item.capital}</span>
        </div>
      </div>
      <div className="ctry-list-list__item">
        <div>
          Population:{" "}
          <span className="ctry-list-list__item--value">{item.population}</span>
        </div>
        <div>
          Currency:{" "}
          <span className="ctry-list-list__item--value">
            {item.currencies[0].name}{" "}
            {round(item.currencyValue_SEK * currencyInput, 2)}
          </span>
        </div>
      </div>
    </div>
  );
};

const CountrySearchResult = ({ countryList, currencyInput = 0 }) => {
  return (
    <div className="ctry-list-list">
      <div className="ctry-list-list__grid">
        {countryList.map(item => {
          return (
            <ListItem
              key={item.numericCode}
              item={item}
              currencyInput={currencyInput}
            />
          );
        })}
        <div />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

CountrySearchResult.propTypes = {
  countryList: PropTypes.array.isRequired
};

export default CountrySearchResult;
