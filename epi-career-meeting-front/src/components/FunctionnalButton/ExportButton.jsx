import React, { useState, useContext } from 'react';
import { ListInfo } from '../ListInfo/ListInfo';
import saveAs from 'file-saver';
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
          .then(response => {
            console.log(response);
            // saveAs(response.blob, 'output.xlsm');
          });
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
