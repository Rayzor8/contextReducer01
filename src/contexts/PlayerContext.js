import React, { createContext } from 'react';
import uuid from 'uuid/v4';


export const playerContext = createContext();

const playerContextProvider = ({ children }) => {
   const [player, setPlayer] = React.useState([
      {
         playerName: 'Cristiano Ronaldo',
         club: 'Manchester United',
         position: 'Forward',
         id: uuid()
      },
      {
         playerName: 'Lionel Messi',
         club: 'Paris Saint-Germain',
         position: 'forward',
         id:uuid()
      },
      {
         playerName: 'Neymar',
         club: 'Paris Saint-Germain',
         position: 'wiger',
         id:uuid()
      }
   ]);

   const addPlayer = (playerName,club,position) => {
      setPlayer([...player,{playerName,club,position,id:uuid()}]);
   }

   return(<div></div>)

};

export default playerContextProvider;