const dollarsInFlight = (infectionsByReqTime, avgIncome, avgIncomePopulation) => {
  const dollarsLost = (infectionsByReqTime * avgIncome * avgIncomePopulation) / 30;
  return dollarsLost;
};
//
export default dollarsInFlight;
