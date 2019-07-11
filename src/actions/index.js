// import flats from '../flats';

export function setFlats() {

  return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_FLATS',
        payload: data
      };
    });
}

export function selectFlat(flat) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}
