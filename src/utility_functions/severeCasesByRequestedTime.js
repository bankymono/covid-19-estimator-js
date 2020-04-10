const severeCasesByRequestedTime = (infectionsByRequestedTime) => {
  const percent = 15 / 100;
  const severelyImpacted = infectionsByRequestedTime * percent;
  return Math.trunc(severelyImpacted);
};
//
export default severeCasesByRequestedTime;
