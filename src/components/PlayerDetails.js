import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';

const PlayerDetails = () => {
   const { player, addPlayer, removePlayer } = useContext(playerContext);

   return (
      <div>
         <h1>player</h1>
      </div>
   );
};

export default PlayerDetails;
