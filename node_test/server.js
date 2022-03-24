const reader = require('xlsx');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('root');
    res.send('Hi');
});

app.post('/document', (req, res) => {
    console.log(req.body);
    try {
        const filePath = path.join(__dirname, '/org_passages_clear_final.xlsm');
        const workbook = reader.readFile(filePath, { bookVBA: true });
        const ws = reader.utils.aoa_to_sheet(req.body)
        reader.utils.book_append_sheet(workbook, ws, 'sheet');
        // let worksheet = workbook.Sheets['dev'];
        reader.writeFile(workbook, './output.xlsm');
        res.sendStatus(200);
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
