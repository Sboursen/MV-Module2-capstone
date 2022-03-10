import CarsApi from '../home/cars-api';
import {
  setReservedToAPI,
  getDataFromInvolvementAPI,
} from './involvementAPI';

export default function showReservationModal(e) {
  const id = Number(e.target.parentNode.parentNode.id);

  const carApi = new CarsApi();

  const reservationsPopUp = document.createElement('div');
  const body = document.querySelector('body');

  carApi.getDataPromise().then((data) => {
    function doOntReserveButtonClicked() {
      console.log(userInput, startDateInput, endDateInput);
      console.log(username, startDate, endDate);
    }
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
    <h2 class='description'>${car.make} ${car.model} ${car.year}</h2>
    <div>
      <div class='flex justify-around'>
       <p class='make '>Make: ${car.make}</p>
       <p class='model'>Model: ${car.model}</p>
      </div>
      <div class='flex justify-around' >
       <p class='horsepower'>Horsepower: ${car.horsepower}</p>
       <p class='price'>Price: ${car.price}</p>
      </div>
    </div>
    <div class="reserved-cars-container">
     <h2 class= "reserved-cars-title"> Reservations <span id="counter-span"></span></h2>
     <ul class="reserved-cars">
     <li class= "reserved-car"></li>
     </ul> 
    
</div>
    <div class='book-cars w-full max-w-xs'>
    <form class='form  shadow-md rounded px-8 pt-6 pb-8 mb-4'>
         <h2 class='book-cars-title'> Add a reservation </h2>
         
          <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 mb-6" id="username" type="text" placeholder="name" value="">
          <input class='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="start-date" type="date" placeholder='start-date'>
          <input class='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id="end-date" type="date" placeholder='end-date'>
          <button class='reserve-car-btn center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6' id="reserve-button-${id}"> Reserve </button>
        </form>
    </div>
    </div>   
    `;
    body.appendChild(reservationsPopUp);

    // getDataFromInvolvementAPI(id);

    const reserveCarBtn = document.querySelector(
      'form.form .reserve-car-btn',
    );
    const userInput = document.querySelector(
      '#pop-up #username',
    );
    const startDateInput = document.querySelector(
      '#pop-up #start-date',
    );
    const endDateInput = document.querySelector(
      '#pop-up #end-date',
    );

    userInput.value = 'new value';
    startDateInput.value = '2017-06-01';
    endDateInput.value = '2017-06-01';

    const username = userInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    reserveCarBtn.addEventListener(
      'click',
      doOntReserveButtonClicked,
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
