const jsonfs = require("./jsonfs");

module.exports = async function deletePerson(_reqId) {
  const reqId = _reqId;
  const data = await jsonfs.readJSON("./database.json");
  const newData = data.filter((el) => el.id != reqId);
  await jsonfs.writeJSON("./database.json", newData);
  return newData;
};
