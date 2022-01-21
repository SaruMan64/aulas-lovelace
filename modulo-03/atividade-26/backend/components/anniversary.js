const database = require("../database");

module.exports = function anniversary(month) {
  month = Number(month);
  //console.log(month);
  if (month >= 1 && month <= 12) {
    month = month - 1;
    const monthNow = new Date(2022, month).getMonth();

    let anniversary = database.filter((el) => {
      const date = new Date(el.birth).getMonth();
      if (monthNow === date) {
        return el;
      }
    });

    anniversary = anniversary.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    //console.log(anniversary);
    return anniversary;
  } else {
    return false;
  }
};
