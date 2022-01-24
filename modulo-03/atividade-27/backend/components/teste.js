const jsonfs = require("./jsonfs");

module.exports = async function anniversary(_month) {
  const month = Number(_month);
  if (month >= 1 && month <= 12) {

    const dataBase = async (_month) => {
      let month = _month;
      month = month - 1;
      const database = await jsonfs.readJSON("./database.json");

      let anniversary = database.filter((el) => {
        let date = new Date(el.birth).getMonth();
        if (month === date) {
          return el;
        }
      });

      anniversary = anniversary.sort((a, b) => {
        return a.birth.localeCompare(b.birth);
      });

      //console.log(anniversary);
      return anniversary;
    };
    const data = await dataBase(month);
    return data;
  } else {
    return false;
  }
};