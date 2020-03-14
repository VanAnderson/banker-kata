import fs from 'fs';
import ScannedSheet from '../lib/scanned-sheet';

const sampleSheet = 
  fs.readFileSync('./lib/scanned-sheet/sample_sheet.txt', 'utf8');

const scannedSheet = new ScannedSheet(sampleSheet);

const stringAccountNumbers = scannedSheet.accountNumbers.map(ss=>{
  return ss.toString();
});

console.log(stringAccountNumbers)
