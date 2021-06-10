const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(22, 7, 2020), days);
  return "${newDate.getDate()}-
  ${newDate.getMonth()+1}-
    ${newDate.getYear()}";
};

module.exports = getDateAfterXDays;
