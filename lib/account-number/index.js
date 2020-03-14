export default class AccountNumber {
  constructor(accountScannedDigits) {
    this.accountScannedDigits = accountScannedDigits;
  }

  toInteger() {
    return parseInt(this.toString());
  }

  toString() {
    return this.accountScannedDigits.map(sd=>sd.toInteger())
                                    .join('');
  }
}