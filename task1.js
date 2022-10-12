const stringLength = (string) => {
  if (string < 1) return "String length should atleast have 1 characters";
  else if (string > 10)
    return "String length should not have motre than 10 characters";
  else return string.trim().length;
};

module.exports = stringLength;
