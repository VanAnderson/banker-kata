import AccountNumber from '../lib/account-number';
import ScannedDigit from '../lib/scanned-digit';

import { one, 
         two, 
         three,
         four,
         five,
         six, 
         seven, 
         eight, 
         nine } from '../lib/scanned-digit/digits';
import { equal } from "assert";


describe(('AccountNumber'), () => {
  it('translate a group of 9 ScannedDigits to an integer', () => {
    const scannedDigits = [ 
      new ScannedDigit(one),
      new ScannedDigit(two),
      new ScannedDigit(three),
      new ScannedDigit(four),
      new ScannedDigit(five),
      new ScannedDigit(six),
      new ScannedDigit(seven),
      new ScannedDigit(eight),
      new ScannedDigit(nine)
    ];

    const accountNumber = new AccountNumber(scannedDigits)
      
    equal(123456789, accountNumber.toInteger());
  });
  
  it('passes checksum when given valid account digits', ()=>{
    const scannedDigits = [ 
      new ScannedDigit(one),
      new ScannedDigit(two),
      new ScannedDigit(three),
      new ScannedDigit(four),
      new ScannedDigit(five),
      new ScannedDigit(six),
      new ScannedDigit(seven),
      new ScannedDigit(eight),
      new ScannedDigit(nine)
    ];

    const accountNumber = new AccountNumber(scannedDigits)
      
    equal(true, accountNumber.isChecksumValid());
  });

  it('fails checksum when given invalid account digits', ()=>{
    const scannedDigits = [ 
      new ScannedDigit(two),
      new ScannedDigit(two),
      new ScannedDigit(three),
      new ScannedDigit(four),
      new ScannedDigit(five),
      new ScannedDigit(six),
      new ScannedDigit(seven),
      new ScannedDigit(eight),
      new ScannedDigit(nine)
    ];

    const accountNumber = new AccountNumber(scannedDigits)
      
    equal(false, accountNumber.isChecksumValid());
  })
});