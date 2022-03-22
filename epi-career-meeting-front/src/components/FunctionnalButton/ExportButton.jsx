import React from 'react';

function ExportButton() {
  return (
    <a href={process.env.PUBLIC_URL + '/org_passages_clear.xlsm'} download className="flex bg-emerald-500 rounded-md justify-center items-center bg-green-300 w-20" filename={"dev.csv"}>
      <span>Export</span>
    </a>
  )
}

export default ExportButton
