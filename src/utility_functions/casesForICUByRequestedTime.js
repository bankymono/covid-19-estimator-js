const casesForICUByRequestedTime = (infectionsByRequestedTime) => {
  const percent = 5 / 100;
  const casesForICU = infectionsByRequestedTime * percent;
  return casesForICU;
};
export default casesForICUByRequestedTime;
