const infectionsByRequestedTime = (currentlyInfected, periodType, inputPeriod) => {
  //
  let factor = 0;
  let period = 0;
  //
  if (periodType === 'months') {
    period = inputPeriod * 30;
  } else if (periodType === 'weeks') {
    period = inputPeriod * 7;
  } else if (periodType === 'days') {
    period = inputPeriod;
  }
  //
  factor = parseInt(period / 3, 10);
  const result = currentlyInfected * 2 ** factor;
  //
  return result;
};
export default infectionsByRequestedTime;
