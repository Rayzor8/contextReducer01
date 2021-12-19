import React, { createContext ,useReducer} from 'react';
import { playerReducer } from '../reducers/playerReducer';
export const playerContext = createContext();


const PlayerContextProvider = ({ children }) => {
   const [player, dispatch] = useReducer(playerReducer,[
      {
         playerName: 'Cristiano Ronaldo',
         club: 'Manchester United',
         position: 'Forward',
         id: 1,
      },
      {
         playerName: 'Lionel Messi',
         club: 'Paris Saint-Germain',
         position: 'forward',
         id: 2,
      },
      {
         playerName: 'Neymar',
         club: 'Paris Saint-Germain',
         position: 'wiger',
         id:3,
      },
   ]);

   return (
      <playerContext.Provider value={{ player ,dispatch}}>
         {children}
      </playerContext.Provider>
   );
};



export default PlayerContextProvider;
