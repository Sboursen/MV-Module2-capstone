import CarsApi from '../home/cars-api';
import {
  setReservedToAPI,
  getDataFromInvolvementAPI,
} from './involvementAPI';

const carApi = new CarsApi();

const reservationsPopUp = document.createElement('div');
const body = document.querySelector('body');

const saveReservationToApi = (e) => {
  const id = e.target.id.split('-').at(-1);
  const userNameInput = document.querySelector(
    '#userNameInput',
  );

  const startDateInput = document.querySelector(
    '#startDateInput',
  );

  const endDateInput = document.querySelector('#endDateInput');

  const dataBody = {
    item_id: id,
    username: userNameInput.value,
    date_start: startDateInput.value,
    date_end: endDateInput.value,
  };

  setReservedToAPI(dataBody);
};

export default function showReservationModal(e) {
  const id = Number(e.target.parentNode.parentNode.id);

  carApi.getDataPromise().then((data) => {
    reservationsPopUp.classList.add(
      'reservation-container',
    );
    reservationsPopUp.id = 'pop-up';
    reservationsPopUp.hidden = true;
    reservationsPopUp.style.display = 'block';

    const car = data[id];

    reservationsPopUp.innerHTML = `
    <div class="reservation-content car-card bg-white flex flex-col gap-2 border-4 rounded-md border-violet-600" id="${id}">
    <div class='flex justify-between'>
     <img class="flex-1 bg-contain w-78" src=${car.imgUrl}>
     <span class='flex-1 close text-2xl'> X </span>
    </div>
    <h2 class='description'>${car.model} ${car.year}</h2>
    <div>
      <div class=' flex justify-around'>
       <p class='make '>Model: ${car.model}</p>
       <p class='model'>Year: ${car.year}</p>
      </div>
      <div class='flex justify-around' >
       <p class='horsepower'>Horsepower: ${car.horsepower}</p>
       <p class='price'>Price: ${car.price}</p>
      </div>
    </div>
    <div class="reserved-cars-container">
     <h2 class= "reserved-cars-title"> Reservations <span id="counter-span"></span></h2>
     <ul class="reserved-cars">
     </ul>
    

</div>
    <div class='book-cars w-full max-w-xs'>
    <form class='form  shadow-md rounded px-8 pt-6 pb-8 mb-4'>
         <h2 class='book-cars-title'> Add a reservation </h2>
         
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6" id="userNameInput" type="text" placeholder="name">
          <input class='start-date bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="startDateInput" type="date" placeholder='start-date'>
          <input class='end-date bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="endDateInput" type="date" placeholder='end-date'>
          <button class='reserve-car-btn center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6' type='button' id='reserve-button-${id}'> Reserve </button>
        </form>
    </div>
    </div>   
    `;
    body.appendChild(reservationsPopUp);

    const displayReserves = document.querySelector(
      '.reserved-cars',
    );

    getDataFromInvolvementAPI(id).catch(() => {
      displayReserves.textContent = '';
    });

    const reserveCarBtn = document.querySelector(
      'form.form .reserve-car-btn',
    );

    reserveCarBtn.addEventListener(
      'click',
      saveReservationToApi,
    );

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      body.removeChild(reservationsPopUp);
      reservationsPopUp.style.display = 'none';
    });
  });
}
