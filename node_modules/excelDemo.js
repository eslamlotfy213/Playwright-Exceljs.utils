// dh object  ExcelJs
// dh class   exceljs
// dh access el method Workbook()
const ExcelJs = require('exceljs');

async function WritExcelTest(searchText, replaceText, filePath) {

  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
   const output=  await readExcel(worksheet, searchText);
  const cell = worksheet.getCell(output.row, output.columm);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);

}


async function readExcel(worksheet, searchText) {
  let output = { row: -1, columm: -1 }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.columm = colNumber;
      }
    })

  })
  return output;
};



//c all methods
//  serahc for apple 
// replace apple with Republic 
// add filPath 
WritExcelTest("Apple", "Republic", "D:/playwight2/ExceljsUtils/download.xlsx");



