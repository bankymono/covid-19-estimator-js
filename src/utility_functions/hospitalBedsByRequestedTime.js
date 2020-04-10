const availableBeds = (severeCases, hospitalBeds) => {
  const percent = 35 / 100;
  const bedsAvail = hospitalBeds * percent;
  const truncBedsAvail = Math.trunc(bedsAvail);
  const availForPatients = truncBedsAvail - severeCases;
  if (availForPatients < 0) {
    return availForPatients;
  }
  return truncBedsAvail;
  //
};
export default availableBeds;
