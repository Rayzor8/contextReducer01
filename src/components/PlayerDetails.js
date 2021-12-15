import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { playerContext } from '../contexts/PlayerContext';

const PlayerDetails = () => {
   const { player , addPlayer, removePlayer} = useContext(playerContext);
   console.log(addPlayer)
   return <div></div>;
};

export default PlayerDetails;
