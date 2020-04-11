import currentlyInfected from './utility_functions/currentlyInfected';
import infectionsByRequestedTime from './utility_functions/infectionsByRequestedTime';
import severeCasesByRequestedTime from './utility_functions/severeCasesByRequestedTime';
import availableBedsForSevereCases from './utility_functions/hospitalBedsByRequestedTime';
import casesForICUByRequestedTime from './utility_functions/casesForICUByRequestedTime';
import casesForVentsByRequestedTime from './utility_functions/casesForVentilatorsByRequestedTime';
import dollarsInFlgt from './utility_functions/dollarsInFlight';
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
  const sevCasesByReqTime = Math.trunc(severeCasesByRequestedTime(infectionsByReqTime));
  const sevSevCasesByReqTime = Math.trunc(severeCasesByRequestedTime(severeInfectionsByReqTime));
  //
  //
  // 4. computing available beds for severe cases
  const availableBeds = Math.trunc(availableBedsForSevereCases(sevCasesByReqTime,
    input.totalHospitalBeds));
  const availableBedsForSevere = Math.trunc(availableBedsForSevereCases(sevSevCasesByReqTime,
    input.totalHospitalBeds));
  //
  //
  //
  // ##################################################################
  // #                      CHALLENGE 3                               #
  // ##################################################################
  //
  //
  // 5. computing cases for ICU
  const icuCases = Math.trunc(casesForICUByRequestedTime(infectionsByReqTime));
  const severeICUCases = Math.trunc(casesForICUByRequestedTime(severeInfectionsByReqTime));
  //
  //
  // 6. computing cases needing ventilators
  const ventsCases = Math.trunc(casesForVentsByRequestedTime(infectionsByReqTime));
  const severeVentsCases = Math.trunc(casesForVentsByRequestedTime(severeInfectionsByReqTime));
  //
  //
  // 7. computing dollars in flight
  const dollarsLost = Math.trunc(dollarsInFlgt(infectionsByReqTime,
    input.region.avgDailyIncomeInUSD,
    input.region.avgDailyIncomePopulation, input.periodType, input.timeToElapse));
  const severeDollarsLost = Math.trunc(dollarsInFlgt(severeInfectionsByReqTime,
    input.region.avgDailyIncomeInUSD, input.region.avgDailyIncomePopulation,
    input.periodType, input.timeToElapse));
  //
  //
  return {
    data: input,
    impact: {
      currentlyInfected: currInfected,
      infectionsByRequestedTime: infectionsByReqTime,
      severeCasesByRequestedTime: sevCasesByReqTime,
      hospitalBedsByRequestedTime: availableBeds,
      casesForICUByRequestedTime: icuCases,
      casesForVentilatorsByRequestedTime: ventsCases,
      dollarsInFlight: dollarsLost
    },
    severeImpact: {
      currentlyInfected: severeCurrInfected,
      infectionsByRequestedTime: severeInfectionsByReqTime,
      severeCasesByRequestedTime: sevSevCasesByReqTime,
      hospitalBedsByRequestedTime: availableBedsForSevere,
      casesForICUByRequestedTime: severeICUCases,
      casesForVentilatorsByRequestedTime: severeVentsCases,
      dollarsInFlight: severeDollarsLost
    }
  };
};

export default covid19ImpactEstimator;
