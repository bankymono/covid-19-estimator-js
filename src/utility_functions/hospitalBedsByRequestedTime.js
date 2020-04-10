const availableBeds = (severeCases, hospitalBeds) => {
  const bedsAvail = hospitalBeds * (35 / 100);
  const truncBedsAvail = Math.trunc(bedsAvail);
  const availForPatients = truncBedsAvail - severeCases;
  if (availForPatients < 0) {
    return availForPatients;
  }
  return truncBedsAvail;
  //
};
export default availableBeds;
