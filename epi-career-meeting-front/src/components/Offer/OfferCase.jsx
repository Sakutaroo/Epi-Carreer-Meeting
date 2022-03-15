import React from 'react';

function OfferCase(props) {
  const formatStudents = (studentsList) => {
    let formatStringStudents = "";

    formatStringStudents += studentsList[0];
    for (let i = 1; i < studentsList.length; i++) {
      formatStringStudents += ', ';
      formatStringStudents += studentsList[i];
    }
    return formatStringStudents;
  };

  return (
    <tr>
      <th className="border border-slate-600">{props.index}</th>
      <th className="border border-slate-600">{props.name}</th>
      <th className="border border-slate-600">{formatStudents(props.students)}</th>
    </tr>
  )
}

export default OfferCase
