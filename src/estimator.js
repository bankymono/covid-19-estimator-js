import currentlyInfected from './utility_functions/currentlyInfected';
import infectionsByRequestedTime from './utility_functions/infectionsByRequestedTime';
import severeCasesByRequestedTime from './utility_functions/severeCasesByRequestedTime';
import availableBedsForSevereCases from './utility_functions/hospitalBedsByRequestedTime';
//
//
const covid19ImpactEstimator = (data) => {
  const input = data;
  //
  //
  // Computing Output properties
  // ##################################################################
  // #                      CHALLENGE 1                               #
  // ##################################################################
  // 1. starting with currently infected for both impact and severe impact
  const currInfected = currentlyInfected(input.reportedCases, 10);
  const severeCurrInfected = currentlyInfected(input.reportedCases, 50);
  //
  //
  // 2. computing infections by requested time
  const infectionsByReqTime = infectionsByRequestedTime(currInfected, input.periodType,
    input.timeToElapse);
  const severeInfectionsByReqTime = infectionsByRequestedTime(severeCurrInfected, input.periodType,
    input.timeToElapse);
  //
  //
  // ####################################################################
  // #                     CHALLENGE 2                                  #
  // ####################################################################
  // 3. computing severe cases by requested time
  const sevCasesByReqTime = severeCasesByRequestedTime(infectionsByReqTime);
  const sevSevCasesByReqTime = severeCasesByRequestedTime(severeInfectionsByReqTime);
  //
  //
  // 4. computing available beds for severe cases
  const availableBeds = availableBedsForSevereCases(sevCasesByReqTime, input.totalHospitalBeds);
  const availableBedsForSevere = availableBedsForSevereCases(sevSevCasesByReqTime,
    input.totalHospitalBeds);
  //
  //
  return {
    data: input,
    impact: {
      currentlyInfected: currInfected,
      infectionsByRequestedTime: infectionsByReqTime,
      severeCasesByRequestedTime: sevCasesByReqTime,
      hospitalBedsByRequestedTime: availableBeds,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    },
    severeImpact: {
      currentlyInfected: severeCurrInfected,
      infectionsByRequestedTime: severeInfectionsByReqTime,
      severeCasesByRequestedTime: sevSevCasesByReqTime,
      hospitalBedsByRequestedTime: availableBedsForSevere,
      casesForICUByRequestedTime: 0,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    }
  };
};

export default covid19ImpactEstimator;
