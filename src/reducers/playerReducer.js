
export const playerReducer = (state, action) => {
   console.log(state)
   console.log(action);
   switch (action.type) {
      case 'ADD_PLAYER':
         return [
            ...state,
            {
               playerName: action.player.playerName,
               club: action.player.club,
               position: action.player.position,
               id: state.length + 1,
            },
         ];

      case 'REMOVE_PLAYER':
         return state.filter((player) => player.id !== action.id);

      default:
         return state;
   }
};
