const availableBeds = (severeCases, hospitalBeds) => {
  const percent = 35 / 100;
  const bedsAvail = hospitalBeds * percent;
  const truncBedsAvail = parseInt(bedsAvail, 10);
  const availForPatients = truncBedsAvail - severeCases;
  if (availForPatients < 0) {
    return Math.trunc(availForPatients);
  }
  return bedsAvail;
  //
};
export default availableBeds;
