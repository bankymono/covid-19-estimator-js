const casesForVentilatorsByRequestedTime = (infectionsByRequestedTime) => {
  const percent = 2 / 100;
  const casesForVents = infectionsByRequestedTime * percent;
  //
  return casesForVents;
};
export default casesForVentilatorsByRequestedTime;
