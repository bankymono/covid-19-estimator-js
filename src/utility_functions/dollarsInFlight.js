const dollarsInFlight = (infectionsByReqTime, avgIncome, avgIncomePopulation, periodType,
  inputPeriod) => {
  let period = 0;

  //
  if (periodType === 'months') {
    period = inputPeriod * 30;
  } else if (periodType === 'weeks') {
    period = inputPeriod * 7;
  } else if (periodType === 'days') {
    period = inputPeriod;
  }
  const dollarsLost = (infectionsByReqTime * avgIncome * avgIncomePopulation) / period;
  return dollarsLost;
};
//
export default dollarsInFlight;
