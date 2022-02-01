const jsonfs = require("./jsonfs");

module.exports = async function append(_reqBody) {
  const reqBody = _reqBody;
  if (!reqBody.name || !reqBody.email) {
    return false;
  }
  try {
    const data = await jsonfs.readJSON("./database.json");
    let newObj = {};
    if (data.length === 0) {
      newObj = {
        id: 1,
        name: reqBody.name,
        email: reqBody.email,
      };
    } else {
      newObj = {
        id: data[data.length - 1].id + 1,
        name: reqBody.name,
        email: reqBody.email,
      };
    }
    data.push(newObj);
    await jsonfs.writeJSON("./database.json", data);
    return true;
  } catch (e) {
    return e;
  }
};
