const reader = require('xlsx');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('root');
    res.send('Hi');
});

// app.get('/download', (req, res) => {
//     const file = fs.createWriteStream("./output.xlsm");
//     response.download(file);
// });

app.post('/document', (req, res) => {
    console.log(req.body);
    try {
        const values = [0, 10, 14, 0, 20];
        const filePath = path.join(__dirname, '/org_passages_clear_final.xlsm');
        const workbook = reader.readFile(filePath, { bookVBA: true });
        req.body.splice(0, 0, ['company', 'students']);
        for (let i = 1; i < 5; i++) {
            if (!req.body[i]) {
                req.body.push([null, null, values[i]]);
                console.log('true');
            } else {
                req.body[i].push(values[i]);
            }
        }
        console.log(req.body);
        const ws = reader.utils.aoa_to_sheet(req.body)
        reader.utils.book_append_sheet(workbook, ws, 'temp');
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + "output.xlsx"
        );
        reader.writeFile(workbook, './output.xlsm');
        res.download('./output.xlsm', 'output.xlsm');
        // res.status(200).end();
        // res.writeHead(200, {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
        // res.download('./output.xlsm', 'output.xlsm', {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
        // res.sendFile('./output.xlsm');
    } catch (error) {
        console.log(error.stack);
        console.log('error je sais pas quoi');
        res.sendStatus(404);
    }
    // res.send('zebi');
});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log('Listening on port 3001');
});
