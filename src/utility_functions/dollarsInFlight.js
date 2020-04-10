const dollarsInFlight = (infectionsByReqTime, avgIncome, avgIncomePopulation) => {
  const dollarsLost = (infectionsByReqTime * avgIncome * avgIncomePopulation) / 30;
  return parseInt(dollarsLost, 10);
};
//
export default dollarsInFlight;
