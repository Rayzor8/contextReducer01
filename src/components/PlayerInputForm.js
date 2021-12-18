import React from 'react';
import { useContext, useState } from 'react';
import { playerContext } from '../contexts/PlayerContext';

const PlayerInputForm = () => {
   const { player, addPlayer } = useContext(playerContext);
   const [playerName, setPlayerName] = useState('');
   const [club, setClub] = useState('');
   const [position, setPosition] = useState('');

   return (
      <form className="my-10 mx-4 py-6 md:mx-20 lg:mx-80 bg-pink-600 px-4 rounded-lg flex flex-col gap-2">
         <div className='flex gap-1 flex-col'>
            <label htmlFor="player" className='text-white font-bold'>Player name</label>
            <input type="text" placeholder="Input Player Name" className='px-1 rounded italic'/>
         </div>
         <div className='flex gap-1 flex-col'>
            <label htmlFor="player" className='text-white font-bold'>Player name</label>
            <input type="text" placeholder="Input Player Name" className='px-1 rounded italic'/>
         </div>
         <div className='flex gap-1 flex-col'>
            <label htmlFor="player" className='text-white font-bold'>Player name</label>
            <input type="text" placeholder="Input Player Name" className='px-1 rounded italic'/>
         </div>
         
         <input type="button" value="Submit"  className='mt-4 cursor-pointer text-pink-600 rounded px-4 py-2 font-bold bg-yellow-200  w-max '/>
      </form>
   );
};

export default PlayerInputForm;
