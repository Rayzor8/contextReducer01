import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';
import PlayerDetails from './PlayerDetails';

const PlayerList = () => {
   const { player } = useContext(playerContext);
   return (
      <div className="mt-4">
         {player && player.length ? (
            <ul className="flex gap-4 flex-col">
               {player.map((el) => (
                  <PlayerDetails el={el} key={el.id} />
               ))}
            </ul>
         ) : (
            <h1 className="text-center text-clip my-10 text-2xl md:text-4xl font-bold text-pink-600">
               Books is empty
            </h1>
         )}
      </div>
   );
};

export default PlayerList;
