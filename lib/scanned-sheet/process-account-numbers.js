import AccountNumber from '../account-number';
import ScannedDigit from '../scanned-digit';
import _ from 'lodash';

const processIntoCharGroupings = (subLines) => {
  // making an assumption of line lenght
  // possible revisit this to make it more adaptable to bad data
  const digitPositions = [...Array(9).keys()]; // [0,1,2,3,4...,8]
  return digitPositions.map(dp=>{
    return subLines[0].slice(3*dp, 3*dp + 3) +
           subLines[1].slice(3*dp, 3*dp + 3) +
           subLines[2].slice(3*dp, 3*dp + 3) 
  });
};

const processIntoLines = (rawSheet) => {
  const rawLines = rawSheet.split(/\n/);
  const nonBlankLines = rawLines.filter(function(_, i) {
    return (i + 1) % 4;
  });
  return _.chunk(nonBlankLines, 3);
}

export default (rawSheet) => {
  const lines = processIntoLines(rawSheet);
  const charGroupings = lines.map(subLines => {
    return processIntoCharGroupings(subLines);
  });

  const accountDigitGroupings = charGroupings.map(cg => {
    return cg.map(char=> (new ScannedDigit(char)));
  });

  return accountDigitGroupings.map(digitGrouping => {
    return new AccountNumber(digitGrouping);
  });
};