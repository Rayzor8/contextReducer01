import React, { createContext, useReducer } from 'react';
import { playerReducer } from '../reducers/playerReducer';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react/cjs/react.development';

export const playerContext = createContext();

const PlayerContextProvider = ({ children }) => {
   const [player, dispatch] = useReducer(playerReducer, [], () => {
      const dataPlayer = localStorage.getItem('player');
      return dataPlayer
         ? JSON.parse(dataPlayer)
         : [
              {
                 playerName: 'Cristiano Ronaldo',
                 club: 'Manchester United',
                 position: 'Forward',
                 id: uuid(),
              },
              {
                 playerName: 'Lionel Messi',
                 club: 'Paris Saint-Germain',
                 position: 'forward',
                 id: uuid(),
              },
              {
                 playerName: 'Neymar',
                 club: 'Paris Saint-Germain',
                 position: 'wiger',
                 id: uuid(),
              },
           ];
   });

   useEffect(() => {
      localStorage.setItem('player', JSON.stringify(player));
   }, [player]);

   return (
      <playerContext.Provider value={{ player, dispatch }}>
         {children}
      </playerContext.Provider>
   );
};

export default PlayerContextProvider;
