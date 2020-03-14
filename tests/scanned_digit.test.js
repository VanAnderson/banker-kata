import ScannedDigit from '../lib/scanned-digit';
import { one } from '../lib/scanned-digit/digits';
import { equal } from "assert";


describe(('ScannedDigit'), () => {
  it('will read the correct value', () => {
    const digit = new ScannedDigit(one)
    equal(1, digit.toInteger());
  })
})