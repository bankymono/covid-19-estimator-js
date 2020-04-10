const severeCasesByRequestedTime = (infectionsByRequestedTime) => {
  const severelyImpacted = infectionsByRequestedTime * (15 / 100);
  return Math.trunc(severelyImpacted);
};
//
export default severeCasesByRequestedTime;
