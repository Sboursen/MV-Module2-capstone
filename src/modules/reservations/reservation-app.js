import CarsApi from '../home/cars-api';
import { setReservedToAPI, getDataFromInvolvementAPI } from './involvementAPI';

const carApi = new CarsApi();

const reservationsPopUp = document.createElement('div');
const body = document.querySelector('body');

const saveReservationToApi = (e) => {
  const id = e.target.id.split('-').at(-1);
  const userNameInput = document.querySelector('#userNameInput');

  const startDateInput = document.querySelector('#startDateInput');

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
    reservationsPopUp.classList.add('reservation-container');
    reservationsPopUp.id = 'pop-up';
    reservationsPopUp.hidden = true;
    reservationsPopUp.style.display = 'block';

    const car = data[id];

    reservationsPopUp.innerHTML = `
    <div class="reservation-content m-4 car-card bg-white w-11/12 mx-auto flex flex-col gap-2 border-4 rounded-md border-violet-600" id="${id}">
    <div class='h-96 flex relative justify-between'>
     <img class="flex-1 bg-cover w-full" src=${car.imgUrl}>
     <button class='close absolute top-2 right-2 text-2xl rounded-full px-2 border-violet-700 hover:border-red-500 hover:text-red-500 border-4 bg-white'> X </button>
    </div>
   
    <h2 class='description text-center text-xl text-sky-800 font-bold py-5'>${car.make.toUpperCase()}</h2>
    <div class="shadow-lg  flex justify-center flex-col mx-auto w-2/3  my-5 pt-5 rounded-lg">
    <div class="flex justify-center items-center mx-auto w-1/2 flex-wrap">
      <div class='flex justify-around w-full'>
       <p class='make '>Make: <span class="text-sky-800">${car.make.toUpperCase()}</span></p>
       <p class='make '>Model: <span class="text-sky-800">${car.model.toUpperCase()}</span></p>
      </div>
      <div class='flex justify-around w-full'>
       <p class='horsepower'>Year: <span class="text-sky-700">${
  car.year
}</span></p>
       <p class='price'>Price: <span class="text-sky-800">${
  car.price
}</span></p>
      </div>
      <div class='flex w-full justify-center'>
       <p class='horsepower'>Horsepower:<span class="text-sky-800"> ${
  car.horsepower
}</span></p>
      </div>
    </div>
    <div class="reserved-cars-container">
     <h2 class= "reserved-cars-title text-center text-xl font-bold text-sky-800 py-5"> Reservations <span id="counter-span"></span></h2>
     <ul class="reserved-cars w-1/2 mx-auto flex flex-col gap-x-5 justify-center items-center gap-y-4">
     </ul>
    </div>
    <div class='book-cars w-full max-w-lg mx-auto'>
    <form class='form  rounded px-8 pt-6 pb-8 mb-4'>
         <h2 class='book-cars-title my-5 text-xl font-bold text-sky-800 text-center'> Add a reservation </h2>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6" id="userNameInput" type="text" placeholder="name">
          <input class='start-date bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="startDateInput" type="date" placeholder='start-date'>
          <input class='end-date bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="endDateInput" type="date" placeholder='end-date'>
          <button class='reserve-car-btn center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6' type='button' id='reserve-button-${id}'> Reserve </button>
        </form>
    </div>
    </div>
    </div>   
    `;
    body.appendChild(reservationsPopUp);

    const displayReserves = document.querySelector('.reserved-cars');

    getDataFromInvolvementAPI(id).catch(() => {
      displayReserves.textContent = '';
    });

    const reserveCarBtn = document.querySelector('form.form .reserve-car-btn');

    reserveCarBtn.addEventListener('click', saveReservationToApi);

    const closeBtn = document.querySelector('#pop-up .close');
    closeBtn.addEventListener('click', () => {
      body.removeChild(reservationsPopUp);
      reservationsPopUp.style.display = 'none';
    });
  });
}
