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
  userNameInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
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
    <div class="reservation-content relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4" id="${id}">

    <div class='flex relative justify-between'>
     <img class="flex-1 bg-contain w-78" src=${car.imgUrl}>
     <button class='close absolute top-2 right-2 text-2xl rounded-full px-2 border-violet-700 hover:border-red-500 hover:text-red-500 border-4 bg-white'> X </button>
    </div>
    
    <h2 class='text-center text-xl text-slate-600 py-5 font-bold'>${car.make.toUpperCase()}</h2>

    <div class="flex justify-between flex-col w-1/2 mx-auto gap-y-5">
    <div class="flex justify-between w-full mx-auto flex-wrap gap-y-5">
      <div class='w-2/5 flex text-lg justify-center gap-x-4'>
         <h3 class='model'>Model: </h3>
         <span class="text-slate-600">${car.model.toUpperCase()}</span>
      </div>
      <div class='w-2/5 flex text-lg justify-center gap-x-4'>
         <h3 class='year'>Year:</h3>
         <span class="text-slate-600"> ${car.year}</span>
      </div>
      <div class='w-2/5 flex text-lg justify-center gap-x-4'>
         <h3 class='horsepower'>Horsepower:</h3>
         <span class="text-slate-600"> ${car.horsepower}</span>
     </div>
     <div class='w-2/5 flex text-lg justify-center gap-x-4'>
         <h3 class='price'>Price: </h3>
         <span class="text-slate-600"> ${car.price}</span>
     </div>
     </div>
    <div class="reserved-cars-container ml-3">
     <h2 class= "reserved-cars-title text-center text-xl py-4 font-bold text-slate-600"> Reservations <span id="counter-span"></span></h2>
     <ul class="reserved-cars flex justify-center flex-col mx-auto items-center py-2">
     </ul>
    </div>
    <div class='book-cars w-full max-w-xs ml-3'>
    <h2 class='book-cars-title text-center py-4 text-xl font-bold text-slate-600'> Add a reservation </h2>

    <form class='form flex justify-center flex-col mx-auto items-center'> 

          <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6" id="userNameInput" type="text" placeholder="name">

          <input class='start-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="startDateInput" type="date" placeholder='start-date'>

          <input class='end-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="endDateInput" type="date" placeholder='end-date'>

          <button class='reserve-car-btn center text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg' type='button' id='reserve-button-${id}'> Reserve </button>
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

    const closeBtn = document.querySelector(
      '#pop-up .close',
    );
    closeBtn.addEventListener('click', () => {
      body.removeChild(reservationsPopUp);
      reservationsPopUp.style.display = 'none';
    });
  });
}
