import React, { useContext } from 'react';
import OfferCase from './OfferCase';
import { ListInfo } from '../ListInfo/ListInfo';

const OfferDisplay = () => {
  const {infos} = useContext(ListInfo);

  return (
    <div className="mt-16 mb-16 w-1/2 mx-auto">
      <table className="w-full">
        <colgroup>
          <col className="w-1/12"/>
          <col className="w-1/4"/>
          <col className="w-1/2"/>
        </colgroup>
        <tr>
          <th className="border border-slate-600">Number</th>
          <th className="border border-slate-600">Company</th>
          <th className="border border-slate-600">Students</th>
        </tr>
        {infos.map((element, index) =>
          <OfferCase key={element} name={element['company']} index={index + 1} students={element['students']}/>
        )}
      </table>
    </div>
  )
}

export default OfferDisplay
