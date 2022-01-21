const database = require("../database");

module.exports = function extension(_number) {
  const number = Number(_number);

  let dataExtensionNumber = database.filter((el) => {
    if (number === el.extension) {
      return el;
    }
  });

  dataExtensionNumber = dataExtensionNumber.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return dataExtensionNumber;
};
