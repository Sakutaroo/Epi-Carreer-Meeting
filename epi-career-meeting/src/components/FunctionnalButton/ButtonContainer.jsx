import React from 'react';
import AddButton from './AddButton';
import ResetButton from  './ResetButton';
// import { ListInfo } from '../ListInfo/ListInfo';

function ButtonContainer() {
    return (
        <div className="flex justify-around h-12 w-1/6 mx-auto mb-10">
            <AddButton />
            <ResetButton />
        </div>
    )
}

export default ButtonContainer
