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
  const displayReserves = document.querySelector(
    '.reserved-cars',
  );

  try {
    let response = await fetch(url);

    response = await response.json().then((data) => {
      const counter = reservationCounter(data);

      const counterContainer =
        document.querySelector('#counter-span');
      counterContainer.innerHTML = `(${counter})`;

      const reduceData = data.slice(0, 6);

      displayReserves.innerHTML = data.reduce(
        (content, comment) => {
          const commentElement = `<li>${comment.date_start} - ${comment.date_end} by ${comment.username}</li>`;
          content += commentElement;
          return content;
        },
        '',
      );

      //         displayReserves.innerHTML += `
      //   ${data.date_start} - ${data.date_end} by ${data.username};
      //  `;
    });
  } catch (error) {
    throw new Error('Fetch Data Failed');
  }
};

export { setReservedToAPI, getDataFromInvolvementAPI };
