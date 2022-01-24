const jsonfs = require("./jsonfs");

module.exports = async function anniversary(_month) {
  const month = Number(_month);
  if (month >= 1 && month <= 12) {
    const dataBase = async (_month) => {
      let month = _month;
      month = month - 1;
      const database = await jsonfs.readJSON("./database.json");

      const anniversary = database
        .filter((el) => {
          let date = new Date(el.birth).getMonth();
          if (month === date) {
            return el;
          }
        })
        .map(({ name, birth }) => ({ name, birth }))
        .sort((a, b) => a.birth.localeCompare(b.birth));

      return anniversary;
    };
    const data = await dataBase(month);
    return data;
  } else {
    return false;
  }
};
