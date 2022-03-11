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
    }
  );
  return response;
};

const getDataFromInvolvementAPI = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations?item_id=${id}`;
  const displayReserves = document.querySelector('.reserved-cars');

  try {
    const response = await fetch(url);

    await response.json().then((data) => {
      const counter = reservationCounter(data);

      const counterContainer = document.querySelector('#counter-span');
      counterContainer.innerHTML = `(${counter})`;

      displayReserves.innerHTML = data.reduce((content, comment) => {
        const commentElement = `<li class="gap-5 w-full flex-wrap flex justify-center">
        <span class="w-1/5 flex justify-end">${comment.date_start}</span><span> - </span><span class="w-auto">${comment.date_end}</span><span class=""> by<span> <span class="w-1/5 text-sky-700 ml-4">${comment.username}<span>
        </li>`;
        content += commentElement;
        return content;
      }, '');
    });
  } catch (error) {
    throw new Error('Fetch Data Failed');
  }
};

export { setReservedToAPI, getDataFromInvolvementAPI };
