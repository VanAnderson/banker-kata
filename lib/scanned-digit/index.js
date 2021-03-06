import { numberMap } from './digits';

export default class ScannedDigit {
  constructor(rawDigit) {
    this.rawDigit = rawDigit;
    this.numberMap = numberMap
  };

  toInteger() {
    return numberMap[this.rawDigit];
  }

  isLegible() {
    return !!numberMap[this.rawDigit] || numberMap[this.rawDigit] === 0
  }
}
