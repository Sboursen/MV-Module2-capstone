import reservationCounter from './reservation-counter';

const setReservedToAPI = async (
  item_id,
  username,
  date_start,
  date_end,
) => {
  const data = {
    item_id,
    username,
    date_start,
    date_end,
  };
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
};

const getDataFromInvolvementAPI = async (item_id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations?item_id=${item_id}`;
  const reservationsData = await fetch(url).then(
    (response) => response.json(),
  );

  const reservationsList = reservationsData;
  const counter = reservationCounter(reservationsList);

  const counterContainer =
    document.querySelector('#counter-span');
  counterContainer.innerHTML = `(${counter})`;

//   const displayReserves =
//     document.querySelector('.reserved-car');
//   displayReserves.innerHTML += ` 
//   ${reservationsList.date_start} - ${reservationsList.date_end} by ${reservationsList.username};
//  `;
};

export { setReservedToAPI, getDataFromInvolvementAPI };
