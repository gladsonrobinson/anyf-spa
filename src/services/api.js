const country_search_url = `https://restcountries.eu/rest/v2/name/`;

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
