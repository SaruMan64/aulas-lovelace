const jsonfs = require("./jsonfs");

module.exports = async function incremental(_incReq) {
  const incReq = _incReq;

  const readFile = async () => {
    const data = await jsonfs.readJSON("./database.json");
    return data;
  };

  const verification = async (_incReq, _data) => {
    const incReq = _incReq;
    const data = _data;
    let person;
    switch (incReq[0]) {
      case "name":
        return (person = data.filter((el) => {
          return el.name.toLowerCase().includes(incReq[1].toLowerCase());
        }));
      case "id":
        return (person = data.filter((el) => {
          return el.id.toString().includes(incReq[1]);
        }));
      case "email":
        return (person = data.filter((el) => {
          return el.email.includes(incReq[1]);
        }));
    }
  };
  const data = await readFile();
  return await verification(incReq, data);
};
