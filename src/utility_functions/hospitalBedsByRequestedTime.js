const availableBeds = (severeCases, hospitalBeds) => {
  const bedsAvail = hospitalBeds * (35 / 100);
  const availForPatients = bedsAvail - severeCases;
  if (availForPatients < 0) {
    return parseInt(availForPatients, 10);
  }
  return parseInt(bedsAvail, 10);
  //
};
export default availableBeds;