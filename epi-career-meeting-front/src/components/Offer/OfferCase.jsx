import React, { useContext, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { PencilIcon } from '@heroicons/react/solid';
import { ListInfo } from '../ListInfo/ListInfo';

function OfferCase(props) {
  let [isOpen, setIsOpen] = useState(false);
  const {infos, setInfos} = useContext(ListInfo);
  const [students, setStudents] = useState("");
  const [studentsList, setStudentList] = useState(props.students);
  const [companyName, setCompanyName] = useState(props.name);

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
  };

  const changeStudents = (event) => {
    setStudents(event.target.value);
  };

  const changeCompany = (event) => {
    setCompanyName(event.target.value);
  };

  const resetData = (companyName, studentsList) => {
    setStudentList(studentsList);
    setCompanyName(companyName);
    setIsOpen(!isOpen);
  };

  const formatStudents = (studentsList) => {
    let formatStringStudents = "";

    formatStringStudents += studentsList[0];
    for (let i = 1; i < studentsList.length; i++) {
      formatStringStudents += ', ';
      formatStringStudents += studentsList[i];
    }
    return formatStringStudents;
  };

  const removeOffer = (id) => {
    const newList = [...infos];
    newList.splice(id, 1);
    console.log(newList);
    setInfos(newList);
  };

  const reformatStudents = (studentsList) => {
    let compactStudentsList = "";

    for (const element of studentsList) {
      compactStudentsList += element;
      compactStudentsList += '/';
    }
    return compactStudentsList.slice(0, -1);
  };

  const sendData = (id) => {
    let newInfos = [...infos];
    const newOffer = {
      company: companyName.toUpperCase(),
      students: studentsList,
      studentsForCSV: reformatStudents(studentsList)
    };
    newInfos[id] = newOffer;
    console.log(newInfos);
    resetData(companyName, studentsList);
    setInfos(newInfos);
    setIsOpen(!isOpen)
  };

  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-1/6 border-solid border-2 border-black -my-px -mx-px">
        {props.index}
      </div>
      <div className="basis-1/2 border-solid border-2 border-black -my-px -mx-px">
        {props.name}
      </div>
      <div className="basis-1/4 border-solid border-2 border-black -my-px -mx-px">
        {formatStudents(props.students)}
      </div>
      <div className="basis-1/12">
        <div className="flex justify-evenly">
          <PencilIcon className="w-6 h-6 self-center" onClick={() => setIsOpen(!isOpen)}/>
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
                    <button onClick={() => sendData(props.index - 1)} className="border-solid h-10 w-20 border-2 border-black rounded-md">
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
          <XIcon className="w-7 h-7 self-center" onClick={() => removeOffer(props.index - 1)}/>
        </div>
      </div>
    </div>
  )
}

export default OfferCase
