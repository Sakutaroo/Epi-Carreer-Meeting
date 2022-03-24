import React, { useState, useContext } from 'react';
import { ListInfo } from '../ListInfo/ListInfo';
// import * as FileSaver from 'file-saver';
// import Axios from 'axios';

function ExportButton() {
  let clicked = useState(false);
  const {infos} = useContext(ListInfo);

  const exportToCSV = () => {
    let finalOffer = infos.map(info => [info.company, info.studentsForCSV]);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalOffer)
    };

    if (clicked) {
      fetch('http://localhost:3001/document', requestOptions)
          .then((response) => response.blob()
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            // const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'output.xlsm'); //or any other extension
            document.body.appendChild(link);
            link.click();
            }))
            // console.log(response);
            // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            // const data = new Blob([response.blob], {type: fileType});
            // FileSaver.saveAs(response.data, 'output.xlsm');
            // saveAs(response.blob, 'output.xlsm');
    }
    clicked = false;
  }

  return (
    <button onClick={() => {
      clicked = true
      exportToCSV()
    }}
    className="flex bg-emerald-500 rounded-md justify-center items-center bg-green-300 w-20">
      <span>Export</span>
    </button>
  )
}

export default ExportButton
