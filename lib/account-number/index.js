import _ from 'lodash';
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

  isChecksumValid() {
    const products = this.accountScannedDigits.map((ad,i)=>{
      return ad.toInteger()*(9-i);
    });

    return (_.sum(products) % 11) === 0;
  }
}