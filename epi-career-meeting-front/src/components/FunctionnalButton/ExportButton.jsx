import React, { useContext } from 'react';
import { CSVLink } from "react-csv";
import { ListInfo } from '../ListInfo/ListInfo';

function ExportButton() {
  const {infos} = useContext(ListInfo);

  const headers = [
    {label: "Company", key: "company"},
    {label: "Students", key: "studentsForCSV"}
  ];

  return (
    <CSVLink headers={headers} data={(infos)} className="flex bg-emerald-500 rounded-md justify-center items-center bg-green-300 w-20" filename={"dev.csv"}>
      <span>Export</span>
    </CSVLink>
  )
}

export default ExportButton
