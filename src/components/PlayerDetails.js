import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';

const PlayerDetails = ({ el }) => {
   const { removePlayer } = useContext(playerContext);
   return (
      <li className="relative cursor-pointer  hover:shadow-pink-600 transition duration-200 bg-white shadow-lg p-4 md:px-10 flex flex-col justify-center rounded-lg mt-2 mx-4 text-sm md:text-lg md:mx-20 lg:mx-80 overflow-hidden">
         <button
            className="absolute top-0 right-0 bg-pink-600 px-2 py-2 text-xs md:text-sm italic text-white hover:bg-pink-600 transition duration-200"
            onClick={() => removePlayer(el.id)}
         >
            Delete
         </button>
         <h1 className="text-xl md:text-2xl text-pink-600 font-bold">
            {el.playerName}
         </h1>
         <div className="mt-4">
            <p>Data: {el.id}</p>
            <p>Club: {el.club}</p>
            <p>Position: {el.position}</p>
         </div>
      </li>
   );
};

export default PlayerDetails;
