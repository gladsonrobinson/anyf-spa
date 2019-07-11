import React from "react";
import CountriesContainer from "../../containers/Countries";
import {
  ContentWrapper,
  SearchBox,
  InfoMsg,
  CountrySearchResult
} from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <CountriesContainer>
        {({ countryList, fetchStatus, errorMessage, getCountryDetailsByName  }) => {
          return (
            <ContentWrapper>
              <SearchBox onSearch={getCountryDetailsByName} />
              <InfoMsg fetchStatus={fetchStatus} errorMessage={errorMessage} />
              
              <CountrySearchResult countryList={countryList} />
            </ContentWrapper>
          );
        }}
      </CountriesContainer>
    );
  }
}
