const jsonfs = require("./jsonfs");

module.exports = async function extension() {
  //const number = Number(_number);

  const dataBase = async () => {
    const database = await jsonfs.readJSON("./database.json");

    const dataExtensionNumber = database
      .map(({ name, extension }) => ({ name, extension }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return dataExtensionNumber;
  };

  const data = await dataBase();
  return data;
};
