import React, { useContext } from 'react';
import OfferCase from './OfferCase';
import { ListInfo } from '../ListInfo/ListInfo';

const OfferDisplay = () => {
  const {infos} = useContext(ListInfo);

  return (
    <div className="flex flex-col mt-32 mb-4 w-1/2 mx-auto">
      {infos.map((element, index) =>
        <OfferCase key={element} name={element['company']} index={index + 1} students={element['students']}/>
      )}
    </div>
  )
}

export default OfferDisplay
