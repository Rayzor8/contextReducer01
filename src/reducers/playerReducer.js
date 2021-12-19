import { v4 as uuid } from 'uuid';

export const playerReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_PLAYER':
         return [
            ...state,
            {
               playerName: action.player.playerName,
               club: action.player.club,
               position: action.player.position,
               id: uuid(),
            },
         ];

      case 'REMOVE_PLAYER':
         return state.filter((player) => player.id !== action.id);

      default:
         return state;
   }
};
