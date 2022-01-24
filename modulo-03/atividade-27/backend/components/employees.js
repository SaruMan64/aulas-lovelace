const jsonfs = require("./jsonfs");

module.exports = async function sector(_sector) {
  const sector = _sector;

  const dataBase = async (_sector) => {
    const sector = _sector;
    const database = await jsonfs.readJSON("./database.json");

    const dataSector = database
      .filter((el) => {
        if (el.sector.toLowerCase() === sector.toLowerCase()) {
          return el;
        }
      })
      .map(({ name, sector }) => ({ name, sector }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return dataSector;
  };

  const data = await dataBase(sector);
  return data;
};
