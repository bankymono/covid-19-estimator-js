const casesForICUByRequestedTime = (infectionsByRequestedTime) => {
  const casesForICU = infectionsByRequestedTime * (5 / 100);
  return Math.trunc(casesForICU);
};
export default casesForICUByRequestedTime;
