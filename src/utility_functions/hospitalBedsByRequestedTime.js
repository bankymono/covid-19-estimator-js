const availableBeds = (severeCases, hospitalBeds) => {
  const bedsAvail = hospitalBeds * (35 / 100);
  const availForPatients = bedsAvail - severeCases;
  if (availForPatients < 0) {
    return Math.trunc(availForPatients);
  }
  return Math.trunc(bedsAvail);
  //
};
export default availableBeds;
