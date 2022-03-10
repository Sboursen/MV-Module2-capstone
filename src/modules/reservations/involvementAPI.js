import reservationCounter from './reservation-counter';

const setReservedToAPI = async (dataBody) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    },
  );
  return response.json();
};

const getDataFromInvolvementAPI = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations?item_id=${id}`;
  const reservationsData = await fetch(url).then(
    (response) => response.json(),
  );

  const counter = reservationCounter(reservationsData);

  console.log(id);
  console.log(counter);

  const counterContainer =
    document.querySelector('#counter-span');
  counterContainer.innerHTML = `(${counter})`;

  const displayReserves =
    document.querySelector('.reserved-car');
  displayReserves.innerHTML += ` 
  ${reservationsData.date_start} - ${reservationsData.date_end} by ${reservationsData.username};
 `;
};

export { setReservedToAPI, getDataFromInvolvementAPI };
