const casesForICUByRequestedTime = (infectionsByRequestedTime) => {
  const percent = 5 / 100;
  const casesForICU = infectionsByRequestedTime * percent;
  return Math.trunc(casesForICU);
};
export default casesForICUByRequestedTime;
