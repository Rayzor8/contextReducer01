import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';

const Button = ({ bg, text, el, setShowModal }) => {
   const { dispatch } = useContext(playerContext);

   const handleClick = () => {
      if (text === 'Delete') {
         dispatch({ type: 'REMOVE_PLAYER', id: el.id });
      } else {
         setShowModal(false);
      }
   };
   return (
      <>
         <button
            className={`px-4 py-2 md:px-8 md:py-3 mb-4 md:mb-2 rounded-full ${bg} w-fit text-white font-bold shadow-lg shadow-stone-400 hover:scale-95 transition duration-200`}
            onClick={handleClick}
         >
            {text}
         </button>
      </>
   );
};

export default Button;
