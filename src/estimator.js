import currentlyInfected from './utility_functions/currentlyInfected';

const covid19ImpactEstimator = (data) => {
  const input = data;
  
  const currInfected = currentlyInfected(input.reportedCases, 10);
  const severeCurrInfected = currentlyInfected(input.reportedCases, 50);

  return {
    data: input,
    impact: {
      currentlyInfected: currInfected,
      infectionsByRequestedTime: 0,
      severeCasesByRequestedTime: 0,
      hospitalBedsByRequestedTime: 0,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    },
    severeImpact: {
      currentlyInfected: severeCurrInfected,
      infectionsByRequestedTime: 0,
      severeCasesByRequestedTime: 0,
      hospitalBedsByRequestedTime: 0,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    }
  }
};

export default covid19ImpactEstimator;
