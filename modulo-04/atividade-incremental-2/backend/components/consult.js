const jsonfs = require("./jsonfs");

module.exports = async function consulta(_objReq) {
  const objReq = _objReq;

  const readFile = async () => {
    const data = await jsonfs.readJSON("./database.json");
    return data;
  };

  const verification = async (_objReq, _data) => {
    const objReq = _objReq;
    const data = _data;
    let person;
    switch (objReq[0]) {
      case "name":
        return (person = data.filter((el) => {
          return el.name.includes(objReq[1]);
        }));
      case "id":
        return (person = data.filter((el) => {
          return el.id === Number(objReq[1]);
        }));
      case "email":
        return (person = data.filter((el) => {
          return el.email.includes(objReq[1]);
        }));
    }
  };
  const data = await readFile();
  return await verification(objReq, data);
};
