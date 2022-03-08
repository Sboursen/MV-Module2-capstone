import reservationCounter from './reservation-counter';

const setReservationToAPI = async (reservation) => {
  const url = 'url';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.ok;
};

const getReservationsFromAPI = async (item) => {
  const reservationsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/...';
  const reservationList = await fetch(reservationsUrl).then((res) => res.json());
  const resCounter = reservationCounter(reservationList);
};

export default { setReservationToAPI, getReservationsFromAPI };