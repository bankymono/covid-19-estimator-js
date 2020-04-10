const severeCasesByRequestedTime = (infectionsByRequestedTime) => {
  const severelyImpacted = infectionsByRequestedTime * (15 / 100);
  return parseInt(severelyImpacted, 10);
};
//
export default severeCasesByRequestedTime;
