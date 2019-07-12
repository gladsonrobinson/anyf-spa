export const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

export const formatCountryCurrencyData = (
  country,
  currency,
  baseCurrency
) => {
  const baseValue = round((1 / currency[baseCurrency]), 4);
  country.forEach((item) => {
    item[`currencyValue_${baseCurrency}`] = round(currency[item.currencies[0].code] * baseValue, 3)
  })

  return country;
};
