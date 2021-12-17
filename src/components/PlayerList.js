import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';
import PlayerDetails from './PlayerDetails';

const PlayerList = () => {
   const { player } = useContext(playerContext);
   console.log(player);
   return (
      <div className="mt-4">
         {player && player.length ? (
            <ul className="flex gap-4 flex-col">
               {player.map((el) => (
                  <PlayerDetails el={el} key={el.id} />
               ))}
            </ul>
         ) : (
            <h1>Books is empty</h1>
         )}
      </div>
   );
};

export default PlayerList;
