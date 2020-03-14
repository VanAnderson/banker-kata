import ScannedDigit from '../lib/scanned-digit';
import { one, 
         two, 
         three,
         four,
         five,
         six, 
         seven, 
         eight, 
         nine,
         zero
       } from '../lib/scanned-digit/digits';
import { equal } from "assert";


describe(('ScannedDigit'), () => {
  it('will read the correct value for one', () => {
    const digit = new ScannedDigit(one);
    equal(1, digit.toInteger());
  });

  it('will read the correct value for two', () => {
    const digit = new ScannedDigit(two);
    equal(2, digit.toInteger());
  });

  it('will read the correct value for three', () => {
    const digit = new ScannedDigit(three);
    equal(3, digit.toInteger());
  });

  it('will read the correct value for four', () => {
    const digit = new ScannedDigit(four);
    equal(4, digit.toInteger());
  });

  it('will read the correct value for five', () => {
    const digit = new ScannedDigit(five);
    equal(5, digit.toInteger());
  });

  it('will read the correct value for six', () => {
    const digit = new ScannedDigit(six);
    equal(6, digit.toInteger());
  });

  it('will read the correct value for seven', () => {
    const digit = new ScannedDigit(seven);
    equal(7, digit.toInteger());
  });

  it('will read the correct value for eight', () => {
    const digit = new ScannedDigit(eight);
    equal(8, digit.toInteger());
  });

  it('will read the correct value for nine', () => {
    const digit = new ScannedDigit(nine);
    equal(9, digit.toInteger());
  });

  it('will read the correct value for zero', () => {
    const digit = new ScannedDigit(zero);
    equal(0, digit.toInteger());
  });

  it('will return true for isLegible when given a correct string', () => {
    const digit = new ScannedDigit(zero);
    equal(true, digit.isLegible());
  });

  it('will return false for isLegible when given a correct string', () => {
    const digit = new ScannedDigit('fdsksjdkfjs');
    equal(false, digit.isLegible());
  });
});
