import React from 'react';
import { useContext, useState } from 'react';
import { playerContext } from '../contexts/PlayerContext';

const PlayerInputForm = () => {
   const { dispatch} = useContext(playerContext);
   const [alert, setAlert] = useState(false);
   const [formData, setFormData] = useState({
      playerName: '',
      club: '',
      position: '',
   });


   const handleSubmit = (e) => {
      e.preventDefault();
      const { playerName, club, position } = formData;

      if (playerName && club && position) {
         dispatch({type: 'ADD_PLAYER', player:{playerName, club, position}});
         setFormData({ playerName: '', club: '', position: '' });
         setAlert(false);
      } else {
         setAlert(true);
         setTimeout(() => {
            setAlert(false);
         }, 2000);
      }
   };

   return (
      <form
         className="my-10 mx-4 py-6 md:mx-20 lg:mx-80 bg-gray-900  px-4 md:px-10  rounded-lg flex flex-col gap-2"
         onSubmit={handleSubmit}
      >
         {alert && (
            <p className="text-yellow-200 text-center font-bold mb-2">
               Please fill the input fields!!
            </p>
         )}

         <div className="flex gap-1 flex-col">
            <label htmlFor="player" className="text-white font-bold">
               Player name
            </label>
            <input
               type="text"
               value={formData.playerName}
               placeholder="Input player name"
               className="px-1 rounded italic"
               onChange={(e) =>
                  setFormData({ ...formData, playerName: e.target.value })
               }
            />
         </div>
         <div className="flex gap-1 flex-col">
            <label htmlFor="player" className="text-white font-bold">
               Club
            </label>
            <input
               type="text"
               placeholder="Input player club"
               className="px-1 rounded italic"
               value={formData.club}
               onChange={(e) =>
                  setFormData({ ...formData, club: e.target.value })
               }
            />
         </div>
         <div className="flex gap-1 flex-col">
            <label htmlFor="player" className="text-white font-bold">
               Position
            </label>
            <input
               type="text"
               value={formData.position}
               placeholder="Input player position"
               className="px-1 rounded italic"
               onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
               }
            />
         </div>

         <input
            type="submit"
            value="Submit"
            className="mt-4 cursor-pointer text-pink-600 rounded px-4 py-2 font-bold bg-yellow-200  w-max "
         />
      </form>
   );
};

export default PlayerInputForm;
