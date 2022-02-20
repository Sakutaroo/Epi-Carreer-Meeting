import React from 'react';

function OfferCase(props) {
  return (
    <tr>
      <th className="border border-slate-600">{props.index}</th>
      <th className="border border-slate-600">{props.name}</th>
      <th className="border border-slate-600">
        {props.students.map((element) =>
          <span className="" key={element}>{element + '\t'}</span>
        )}
      </th>
    </tr>
  )
}

export default OfferCase
