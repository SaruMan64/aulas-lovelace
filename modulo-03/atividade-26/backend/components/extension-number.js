const database = require("../database");

module.exports = function extension() {
  //const number = Number(_number);

  let dataExtensionNumber = database.map((el) => {
      return {name: el.name, extension: el.extension};
  });

  dataExtensionNumber = dataExtensionNumber.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return dataExtensionNumber;
};
