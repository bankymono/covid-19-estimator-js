const dollarsInFlight = (infectionsByReqTime, avgIncome, avgIncomePopulation) => {
  const dollarsLost = (infectionsByReqTime * avgIncome * avgIncomePopulation) / 30;
  return Math.trunc(dollarsLost);
};
//
export default dollarsInFlight;
