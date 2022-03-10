import reservationCounter from './reservation-counter';

const setReservedToAPI = async (item_id, username, date_start, date_end) => {
  const data = {
    item_id, username, date_start, date_end,
  };
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getDataFromInvolvementAPI = async (item_id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations?item_id=${item_id}`;
  const reservationsData = await fetch(url).then((response) => response.json());

  const reservationsList = reservationsData;
  const counter = reservationCounter(reservationsList);


  const counterContainer = document.createElement('span');
  counterContainer.classList.add('.counter-span');  
  counterContainer.innerHTML += `(${counter})`;

  console.log(counter);

  const reservationsContainer = document.querySelectorAll('.reserved-cars');

  // reservationsContainer.appendChild(counterContainer);

  console.log(reservationsContainer); 

  reservationsContainer.forEach((element) => {
    element.appendChild(counterContainer);
  });

 
  // const reservationNumber = document.querySelectorAll('.reservation-counter');

  // const reservationsContainer = document.querySelectorAll('.reserved-cars');



  

  //  reservationNumber.innerHTML = `(${counter})`;

//   const displayReserves = document.querySelectorAll('.reserved-cars');
//   displayReserves.innerHTML = '';

//   console.log(displayReserves);

//   reservationsList.forEach((reservation) => {
//     const reservedCars = document.createElement('div');

//     reservedCars.innerHTML += `
//       <div class='reserved-cars'>
//       <h2 reserved-cars-title> Reservations </h2>
//       <div class='reserved-car'>
//        ${reservation.date_start} - ${reservation.date_end} by ${reservation.username}
//       </div>
//   </div>
//       `;

//     displayReserves.forEach((element) => {
//       element.appendChild(reservedCars);
//     });
//   });
};

export { setReservedToAPI, getDataFromInvolvementAPI };