import reservationCounter from './reservation-counter';

const appId = 'K2k68wPBsTKAT68ziNEu';

const setReservedToAPI = async (dataBody) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
    },
  );
};

const getDataFromInvolvementAPI = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${id}`;
  const displayReserves = document.querySelector(
    '.reserved-cars',
  );

  try {
    const response = await fetch(url);

    await response.json().then((data) => {
      const counter = reservationCounter(data);

      const counterContainer = document.querySelector('#counter-span');
      counterContainer.innerHTML = `(${counter})`;

      displayReserves.innerHTML = data.reduce(
        (content, comment) => {
          const commentElement = `<li>${comment.date_start} - ${comment.date_end} by ${comment.username}</li>`;
          content += commentElement;
          return content;
        },
        '',
      );
    });
  } catch (error) {
    throw new Error('Fetch Data Failed');
  }
};

export { setReservedToAPI, getDataFromInvolvementAPI };
