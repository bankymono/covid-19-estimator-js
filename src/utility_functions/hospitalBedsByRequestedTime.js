const availableBeds = (severeCases, hospitalBeds) => {
  const percent = 35 / 100;
  const bedsAvail = hospitalBeds * percent;
  const availForPatients = bedsAvail - severeCases;
  //
  return availForPatients;
  //
};
export default availableBeds;
