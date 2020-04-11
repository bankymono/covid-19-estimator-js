const availableBeds = (severeCases, hospitalBeds) => {
  const percent = 35 / 100;
  const bedsAvail = hospitalBeds * percent;
  const availForPatients = bedsAvail - severeCases;
  if (availForPatients < 0) {
    return availForPatients;
  }
  return availForPatients;
  //
};
export default availableBeds;
