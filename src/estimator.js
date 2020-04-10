import currentlyInfected from './utility_functions/currentlyInfected';
import infectionsByRequestedTime from './utility_functions/infectionsByRequestedTime';
//
//
const covid19ImpactEstimator = (data) => {
  const input = data;
  //
  //
  // Computing Output properties
  // starting with currently infected for both impact and severe impact
  const currInfected = currentlyInfected(input.reportedCases, 10);
  const severeCurrInfected = currentlyInfected(input.reportedCases, 50);
  //
  //
  // computing infections by requested time
  const infectionsByReqTime = infectionsByRequestedTime(currInfected, input.periodType,
    input.timeToElapse);
  const severeInfectionsByReqTime = infectionsByRequestedTime(severeCurrInfected, input.periodType,
    input.timeToElapse);
  //
  //
  return {
    data: input,
    impact: {
      currentlyInfected: currInfected,
      infectionsByRequestedTime: infectionsByReqTime,
      severeCasesByRequestedTime: 0,
      hospitalBedsByRequestedTime: 0,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    },
    severeImpact: {
      currentlyInfected: severeCurrInfected,
      infectionsByRequestedTime: severeInfectionsByReqTime,
      severeCasesByRequestedTime: 0,
      hospitalBedsByRequestedTime: 0,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    }
  };
};

export default covid19ImpactEstimator;
