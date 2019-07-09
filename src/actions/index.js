import flats from '../flats';

const setFlats = () => {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export default setFlats;
