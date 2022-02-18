import React, { useState } from 'react';


function OfferCase(props) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="flex mb-8 items-center bg-slate-300 border-solid border-2 border-slate-400 h-16 rounded-md w-full">
                <span className="pl-6 text-2xl">{props.name}</span>
            </button>
            {isOpen &&
                <div className="flex flex-row mb-8 pt-5 pb-5 justify-around">
                    <div  className="flex flex-col w-1/3">
                        <span className="">N° Offre :</span>
                        <span className="">{props.index}</span>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col w-1/3">
                        <span>Entreprise :</span>
                        <span>{props.name}</span>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col w-1/3">
                        <span>Students :</span>
                        {props.students.map((element, index) =>
                            <span>{element}</span>
                        )}
                    </div>
                </div>
            }
        </>
    )
}

export default OfferCase
