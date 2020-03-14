import fs from 'fs';
import ScannedSheet from '../lib/scanned-sheet';
import { deepEqual } from "assert";

const sampleSheet = 
  fs.readFileSync('./lib/scanned-sheet/sample_sheet.txt', 'utf8');

describe(('ScannedSheet'), () => {
  it('tranlate raw data to a collection of AccountNumbers', () => {
    const scannedSheet = new ScannedSheet(sampleSheet);
    
    const expectedAccountNumbers = [
      '000000000',
      '111111111',
      '222222222',
      '333333333',
      '444444444',
      '555555555',
      '666666666',
      '777777777',
      '888888888',
      '999999999',
      '123456789'
    ];

    const actualAccountNumbers = scannedSheet.accountNumbers.map(ss=>{
      return ss.toString();
    });

    deepEqual(expectedAccountNumbers, actualAccountNumbers);
  }); 
});