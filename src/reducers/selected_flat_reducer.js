const selectefFlatReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  if (action.type === 'SELECT_FLAT') {
    return action.payload;
  }
  else {
    return state;
  }
};

export default selectefFlatReducer;
