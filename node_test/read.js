// // Requiring the module
// const reader = require('xlsx')

// // Reading our test file
// const file = reader.readFile('./org_passages_clear.xlsm')

// let student_data = [{
//     Student:'Nikhil',
//     Age:22,
//     Branch:'ISE',
//     Marks: 70
// }]

// const ws = reader.utils.json_to_sheet(student_data)

// reader.utils.book_append_sheet(file, ws, "dev")

// // Writing to our file
// reader.write(file,'./org_passages.xlsm')


// var Excel = require('exceljs');
// async function excelOp() {
//     let workbook = new Excel.Workbook();
//     workbook = await workbook.xlsx.readFile('./org_passages_clear.xlsm'); // replace question_39869739.xls with your file
//     let worksheet = workbook.getWorksheet('Sheet3'); // replace sheetname with actual sheet name
//     worksheet.getRow(1).getCell(1).value = 350; // replace rowNumber and cellNumber with the row and cell you want to modify
//     workbook.xlsx.writeFile('./org_passages_clear.xlsm');
// }

// excelOp();


const XLSX = require('xlsx');

try {

    const workbook = XLSX.readFile('./org_passages_clear_final.xlsm', { bookVBA: true });
    let worksheet = workbook.Sheets['dev'];

    XLSX.writeFile(workbook, './output.xlsm');
    console.log('Completed ...');

} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}