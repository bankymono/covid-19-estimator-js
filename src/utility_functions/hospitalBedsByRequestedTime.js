const availableBeds = (severeCases, hospitalBeds) => {
  const percent = 35 / 100;
  const bedsAvail = hospitalBeds * percent;
  const truncBedsAvail = Math.trunc(bedsAvail);
  const notAvailForPatients = severeCases - truncBedsAvail;
  if (notAvailForPatients > 0) {
    return -notAvailForPatients;
  }
  return truncBedsAvail;
  //
};
export default availableBeds;
