import { SET_FLATS } from '../actions'

const flatsReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  if (action.type === SET_FLATS) {
    return action.payload;
  }
  else {
    return state;
  }
};

export default flatsReducer;
