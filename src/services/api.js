const country_search_url = `https://restcountries.eu/rest/v2/name/`;
const currency_fetch_base_url = "http://data.fixer.io/api/latest";

const _handleError = res => {
  if (res.status === 404 || res.status === 500)
    throw new Error("Error Please try again");
};

const callFetchApi = async endPoint => {
  try {
    const res = await fetch(endPoint);
    _handleError(res);
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCountry = searchKey =>
  callFetchApi(`${country_search_url + searchKey}`);

export const fetchCurrency = (symbols) =>
  callFetchApi(
    `${currency_fetch_base_url}?access_key=${
      process.env.REACT_APP_FIXER_API_KEY
    }&symbols=${symbols.toString()}`
  );
