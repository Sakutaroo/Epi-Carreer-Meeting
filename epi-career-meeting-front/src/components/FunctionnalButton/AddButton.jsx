import React, { useContext, useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { ListInfo } from '../ListInfo/ListInfo';
// import * as Excel from 'exceljs';
import axios from 'axios';

function AddButton() {
  let [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState("");
  const [studentsList, setStudentList] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const {infos, setInfos} = useContext(ListInfo);

  useEffect(() => {
    console.log(infos.length)
    if (infos.length > 0) {
        // const fileName = process.env.PUBLIC_URL + '/org_clear.xlsm'
        // const ExcelJS = require('exceljs');
        const buffer = axios.get(process.env.PUBLIC_URL + '/org_passages_clear.xlsm', {responseType: 'blob'})
        // const wb = new Excel.Workbook();

        console.log(buffer);

        axios.post(process.env.PUBLIC_URL + '/org_passages.xlsm', buffer);
        // const ws = wb.addWorksheet('My Sheet');

        // ws.getCell('A1').value = 'John Doe';
        // ws.getCell('B1').value = 'gardener';

        // const r3 = ws.getRow(3);
        // r3.values = [1, 2, 3, 4, 5, 6];

        // const buffer = wb.xlsx.writeBuffer(fileName)

        // const blob = new Blob([buffer]);
        // Excel.saveAs(blob, process.env.PUBLIC_URL + '/org_clear.xlsm');
    }
  }, [infos])

  const detectType = (event) => {
    if (event.key === 'Enter' && students !== "") {
      setStudentList([...studentsList, students]);
      setStudents('');
    }
  };

  const removeFromList = (id) => {
    const newList = [...studentsList];
    newList.splice(id.index, 1);
    setStudentList(newList);
  }

  const changeStudents = (event) => {
    setStudents(event.target.value);
  };

  const changeCompany = (event) => {
    setCompanyName(event.target.value);
  };

  const resetData = () => {
    setStudentList([]);
    setCompanyName("");
    setIsOpen(!isOpen);
  };

  const reformatStudents = (studentsList) => {
    let compactStudentsList = "";

    for (const element of studentsList) {
      compactStudentsList += element;
      compactStudentsList += '/';
    }
    return compactStudentsList.slice(0, -1);
  };

  const sendData = () => {
    const newOffer = {
      company: companyName.toUpperCase(),
      students: studentsList,
      studentsForCSV: reformatStudents(studentsList)
    };

    setInfos([...infos, newOffer]);
    resetData();
    setIsOpen(!isOpen)
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="border-solid w-20 border-2 border-black rounded-md">
        Add
      </button>
      {isOpen &&
        <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[#02130E] bg-opacity-60">
          <div className="bg-white inset-x-0 top-auto left-1/4 h-2/6 rounded-lg shadow-xl w-6/12 fixed">
            <div>
              <h3 className="text-left text-3xl pt-10 pl-7">Add new offer :</h3>
              <div className="flex flex-row mt-10 justify-around">
                <div className="flex flex-col items-start w-3/12">
                  <label htmlFor="company" className="text-xl">Company Name :</label>
                  <input type="text" value={companyName} onChange={changeCompany} className="mt-4 text-l border-solid border-2 border-inheirt rounded-md w-full" id="company" name="company"/>
                </div>
                <div className="flex flex-col items-start w-3/12">
                  <label htmlFor="company" className="text-xl">Student's name :</label>
                  <input type="text" value={students} onChange={changeStudents} onKeyDown={detectType} className="mt-4 text-l border-solid border-2 border-inheirt rounded-md w-full" id="company" name="company"/>
                </div>
                <div className=" overflow-y-auto border-solid border-2 border-inheirt rounded-md w-4/12 h-28">
                  <div className="flex flex-wrap">
                    {studentsList.map((text, index) =>
                      <div key={text} className="flex px-2 border-solid border-2 border-inheirt rounded-md">
                        <span className="pr-2">{text}</span>
                        <XIcon className="w-4 h-4 self-center" onClick={() => removeFromList({index})}/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-4 w-1/5 mx-auto justify-around">
                <button onClick={sendData} className="border-solid h-10 w-20 border-2 border-black rounded-md">
                  Send
                </button>
                <button onClick={resetData} className="bg-cyan-500 h-10 w-20 rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddButton
