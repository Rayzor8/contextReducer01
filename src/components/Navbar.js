import React, { useContext } from 'react';
import { playerContext } from '../contexts/PlayerContext';

const Navbar = () => {
   const { player } = useContext(playerContext);

   return (
      <nav className="bg-blue-400 flex gap-4 justify-between items-center px-10 py-2">
         <h1 className="text-base md:text-4xl font-bold font-mono text-yellow-200 first-letter:italic first-letter:text-2xl md:first-letter:text-5xl first-letter:text-pink-300 shadow-pink-300">
            Rayzordev
         </h1>

         <h5 className="italic text-yellow-200 text-xs text-center md:text-sm bg-pink-600 px-2 rounded-lg py-1">
            Player on the list{' '}
            <span className="not-italic font-bold">
               ({player && player.length ? player.length : 0})
            </span>
         </h5>
      </nav>
   );
};

export default Navbar;
