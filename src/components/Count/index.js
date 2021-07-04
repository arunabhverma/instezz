import React from 'react';

const count = (val) => {

  const operation = (cnt) => {
    let temp = (parseFloat(cnt)).toFixed(1).split('.')
    const data = temp[1] === '0' ? temp[0] : temp[0] + '.' + temp[1];
    return data;
  }

  const value = parseFloat(val);
  let billionCount = value / 1000000000;
  let billion = operation(billionCount) + 'b';

  let millionCount = value / 1000000;
  let million = operation(millionCount) + 'm';

  let thousandCount = value / 1000;
  let thousand = operation(thousandCount) + 'k';

  if (billionCount >= 1) {
    return billion;
  }
  else if (millionCount >= 1) {
    return million;
  }
  else if (thousandCount >= 1) {
    return thousand;
  }
  else {
    return value
  }


}

export default count;