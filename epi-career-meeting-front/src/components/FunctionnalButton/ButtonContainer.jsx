import React from 'react';
import AddButton from './AddButton';
import ExportButton from  './ExportButton';
import ResetButton from  './ResetButton';

function ButtonContainer() {
  return (
    <div className="flex justify-around h-12 w-1/6 mx-auto mb-10">
      <AddButton />
      <ExportButton />
      <ResetButton />
    </div>
  )
}

export default ButtonContainer
