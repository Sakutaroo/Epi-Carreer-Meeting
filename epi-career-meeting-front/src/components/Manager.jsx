import React, { useState } from 'react'
import OfferDisplay from './Offer/OfferDisplay';
import { ListInfo } from './ListInfo/ListInfo';
import ButtonContainer from './FunctionnalButton/ButtonContainer';

function Manager() {
  const [infos, setInfos] = useState([]);

  return (
    <>
      <ListInfo.Provider value={{ infos, setInfos }}>
        <OfferDisplay /> 
        <ButtonContainer />
      </ListInfo.Provider>
    </>
  )
}

export default Manager
