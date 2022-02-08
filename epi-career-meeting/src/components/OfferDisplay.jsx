import React, { useState } from 'react';
import OfferCase from './OfferCase'

const OfferDisplay = () => {
    const [list, setList] = useState([]);

    const addNewOffer = () => {
        const newOffer = 'Offer';
        
        setList([...list, newOffer]);
    };

    const resetOffer = () => {
        const newList = [];
        
        setList(newList);
    };

    return (
        <>
            <div className="flex flex-col mt-32 mb-4 w-1/2 mx-auto">
                {list.map((text, index) =>
                    <OfferCase text={text} index={index}/>
                )}
            </div>
            <div className="flex justify-around h-12 w-1/6 mx-auto mb-10">
                <button 
                    onClick={addNewOffer}
                    className="border-solid w-20 border-2 border-black rounded-md"
                >
                Add
                </button>
                <button
                    onClick={resetOffer}
                    className="bg-cyan-500 w-20 rounded-md"
                >
                Reset
                </button>
            </div>
        </>
    )
}

export default OfferDisplay
