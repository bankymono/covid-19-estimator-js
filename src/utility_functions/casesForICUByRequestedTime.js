const casesForICUByRequestedTime = (infectionsByRequestedTime) => {
  const casesForICU = infectionsByRequestedTime * (5 / 100);
  return parseInt(casesForICU, 10);
};
export default casesForICUByRequestedTime;
