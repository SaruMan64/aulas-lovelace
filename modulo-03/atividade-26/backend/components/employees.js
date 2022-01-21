const database = require("../database");

module.exports = function sector(_sector) {
  const sector = _sector;
  const dataSector = database.filter((el) => {
    if (el.sector.toLowerCase() === sector.toLowerCase()) {
      return el;
    }
  });

  return dataSector;
};