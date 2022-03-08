import { getReservationsFromAPI, setReservationToAPI } from './getPostInvolvementAPI';

const reservationsPopUp = document.querySelector('.reservations-container');
const mainPopUp = document.querySelector('.main-pop-up');

const displayReservations = async ([cars]) => {
  reservationsPopUp.style.display = 'block';
  mainPopUp.innerHTML = `
    <button type='button' class='close-button'> X </button>
    <img src=${cars.imageUrl}>
    <h2 class='description'>${cars.make} ${cars.model} ${cars.year}</h2>
    <div>
        <p class='make'>${cars.make}</p>
        <p class='horsepower'>${cars.horsepower}</p>
        <p class='model'>${cars.model}</p>
        <p class='price'>${cars.price}</p>
    </div>
    <div class='reserved-cars'>
        <h2 reserved-cars-title> Reservations ${counter}</h2>
        <div class='reserved-car'>
         ${reserved.start} - ${reserved.end} by ${reserved.name}
        </div>
    </div>
    <div class='book-cars'>
        <h2 class='book-cars-title'> Add a reservation </h2>
        <form book-form>
          <input class='name' type='text' placeholder='name' value='name'>
          <input class='start-date' type="date" placeholder='start-date' value='start-date'>
          <input class='end-date' type="date" placeholder='end-date' value='start-date'>
          <button class='book-car-btn'> Book a Car </button>
        </form>
    </div>
    `;

  const closeButton = document.querySelector('.close-btn');

  closeButton.addEventListener('click', () => {
    reservationsPopUp.classList.remove('pop');
    mainPopUp.style.display = 'none';
  });

  const bookCarBtn = document.querySelector('.book-car-btn');
  bookCarBtn.addEventListener('submit', () => {
    const name = document.querySelector('.name').value;
    const startDate = document.querySelector('.start-date').value;
    const endDate = document.querySelector('.start-date').value;
    const reservationId = cars.Id;

    const newReservation = {
      item_Id: reservationId,
      name,
      startDate,
      endDate,
    };
  });

  const form = document.querySelector('.book-form');
  setReservationToAPI(newReservation);
  form.reset();
  getReservationsFromAPI(cars);
};

export default displayReservations;