import cars from './cars-api';
import Comment from './comments';
export const carRender = (id, imgUrl, make, model, likes = 5) => `<div
      class="car-card flex flex-col gap-2 border-4 rounded-md border-violet-600" id="${id}">
      <div class="car-img flex h-40">
        <img class="w-full"
          src="${imgUrl}"
          alt="${make} ${model}">
      </div>
      <div class="car-info flex justify-between p-2">
        <h2>${make} ${model}</h2>
        <div class="flex flex-col">
          <i class="far fa-heart"></i>
          <span>${likes} likes</span>
        </div>
      </div>
      <div class="car-buttons flex flex-col gap-3 p-2 ">
        <button onclick="comments.getSingleCar(${id})" class="comment-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500"
          type="button">Comment</button>
        <button
          class="reservation-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500"
          type="button">Reservation</button>
      </div>
    </div>`;

export function fileExists(imageUrl) {
  const http = new XMLHttpRequest();

  http.open('HEAD', imageUrl, false);
  http.send();

  return Number(http.status) !== 404;
}

const comments = new Comment(id);
// comments.getSingleCar(id);
document
  .querySelector('#modal')
  .addEventListener('click', comments.getSingleCar);
