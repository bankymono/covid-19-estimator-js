const casesForVentilatorsByRequestedTime = (infectionsByRequestedTime) => {
  const casesForVents = infectionsByRequestedTime * (2 / 100);
  //
  return Math.trunc(casesForVents);
};
export default casesForVentilatorsByRequestedTime;
