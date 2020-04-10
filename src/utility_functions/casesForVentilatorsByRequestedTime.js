const casesForVentilatorsByRequestedTime = (infectionsByRequestedTime) => {
  const casesForVents = infectionsByRequestedTime * (2 / 100);
  //
  return parseInt(casesForVents, 10);
};
export default casesForVentilatorsByRequestedTime;
