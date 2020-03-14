import processAccountNumbers from './process-account-numbers';

export default class ScannedSheet {
  constructor(rawSheet) {
    this.rawSheet = rawSheet;
    this.accountNumbers = processAccountNumbers(rawSheet);
  }
};