import React, { createContext } from 'react';

export const playerContext = createContext();


const PlayerContextProvider = ({ children }) => {
   const [player, setPlayer] = React.useState([
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


   const addPlayer = (playerName, club, position) => {
      setPlayer([...player, { playerName, club, position, id: player.length + 1 }]);
   };

   const removePlayer = (id) => {
      console.log(id);
      setPlayer(player.filter((player) => player.id !== id));
   };
   return (
      <playerContext.Provider value={{ player, addPlayer, removePlayer }}>
         {children}
      </playerContext.Provider>
   );
};

console.log(playerContext)

export default PlayerContextProvider;
