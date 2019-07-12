import React from "react";
import CountriesContainer from "../../containers/Countries";
import {
  ContentWrapper,
  SearchBox,
  InfoMsg,
  CountrySearchResult,
  CurrencyInput
} from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <CountriesContainer>
        {({
          countryList,
          fetchStatus,
          errorMessage,
          getCountryDetailsByName,
          onCurrencyValueChange,
          currencyInput
        }) => {
          return (
            <ContentWrapper>
              <SearchBox onSearch={getCountryDetailsByName} />
              <InfoMsg fetchStatus={fetchStatus} errorMessage={errorMessage} />
              <CurrencyInput value={currencyInput} onCurrencyValueChange={onCurrencyValueChange} />
              <CountrySearchResult countryList={countryList} currencyInput={currencyInput} />
            </ContentWrapper>
          );
        }}
      </CountriesContainer>
    );
  }
}
