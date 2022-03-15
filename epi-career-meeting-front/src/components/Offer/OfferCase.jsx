import React, { useContext } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { PencilIcon } from '@heroicons/react/solid';
import { ListInfo } from '../ListInfo/ListInfo';

function OfferCase(props) {
  const {infos, setInfos} = useContext(ListInfo);

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
    newList.splice(id.index, 1);
    setInfos(newList);
  }

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
          <PencilIcon className="w-6 h-6 self-center"/>
          <XIcon className="w-7 h-7 self-center" onClick={() => removeOffer(props.index)}/>
        </div>
      </div>
    </div>
  )
}

export default OfferCase
