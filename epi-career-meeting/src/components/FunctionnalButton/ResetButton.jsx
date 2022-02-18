import React, { useContext } from 'react';
import { ListInfo } from '../ListInfo/ListInfo';

function ResetButton() {
    const {setInfos} = useContext(ListInfo);

    return (
        <button
            onClick={() => setInfos([])}
            className="bg-cyan-500 w-20 rounded-md"
        >
        Reset
        </button>
    )
}

export default ResetButton
