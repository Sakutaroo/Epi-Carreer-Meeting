import React, { useContext } from 'react';
import OfferCase from './OfferCase';
import { ListInfo } from '../ListInfo/ListInfo';

const OfferDisplay = () => {
  const {infos} = useContext(ListInfo);

  return (
    <div className="mt-16 mb-16 w-1/2 mx-auto">
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/6 border-solid border-2 border-black -my-px -mx-px">
          Number
        </div>
        <div className="basis-1/2 border-solid border-2 border-black -my-px -mx-px">
          Company
        </div>
        <div className="basis-1/4 border-solid border-2 border-black -my-px -mx-px">
          Students
        </div>
        <div className="basis-1/12">
        </div>
      </div>
      {infos.map((element, index) =>
        <OfferCase key={element} name={element['company']} index={index + 1} students={element['students']}/>
      )}
    </div>
  )
}

export default OfferDisplay
