import CarsApi from '../home/cars-api';
import Comments from './createComments';
import CommentData from './commentData';
import Api from './createComments';

const carApi = new CarsApi();
const comments = new Comments();
const modalContainer = document.querySelector(
  '#modal-container',
);

export const createComment = (event) => {
  event.preventDefault();
  const api = new Api();
  const form = document.querySelector('.form');
  const comBtn = document.querySelector('.form button');
  const item_id = Number(comBtn.id.split('-')[2]);
  const usernameInput =
    document.querySelector('.form .input');
  const commentInput = document.querySelector(
    '#modal-container .modal-items form textarea',
  );

  const username = usernameInput.value;
  const comment = commentInput.value;
  const commentObj = new CommentData(
    username,
    comment,
    item_id,
  );

  api
    .addComment(commentObj)
    .then((data) => console.log(data));
};

export async function showCommentModal(e) {
  await carApi.getDataPromise().then((data) => {
    const id = Number(e.target.parentNode.parentNode.id);
    if (modalContainer.classList.contains('hidden')) {
      modalContainer.classList.add('show');
      modalContainer.classList.remove('hidden');
    }

    modalContainer.innerHTML = `
    <div
    class="relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4"
    id="modal"
  >
    <div class="h-96 img-container">
      <img
        class="w-full h-full object-cover"
        src="${data[id].imgUrl}"
        alt=""
      />
      <span id="close-modal-btn" class="close">
        <i
          class="fas fa-times absolute top-0 right-0 mt-3 mr-3 text-3xl text-white cursor-pointer"
        ></i>
      </span>
    </div>
    <h2 class="text-center text-xl text-slate-600 py-5 font-bold">${data[id].make}</h2>
    <div class="flex justify-between flex-col w-1/2 mx-auto gap-y-5">
      <div class="flex justify-between w-full mx-auto flex-wrap gap-y-5">
        <div class="w-2/5 flex text-lg justify-center gap-x-4">
          <h3>Model</h3>
          <span class="text-slate-600">${data[id].model}</span>
        </div>
        <div class="w-2/5 flex text-lg justify-center gap-x-4">
          <h3>Year</h3>
          <span class="text-slate-600">${data[id].year}</span>
        </div>
        <div class="w-2/5 flex text-lg justify-center gap-x-4">
          <h3>horsepower</h3>
          <span class="text-slate-600">${data[id].horsepower}</span>
        </div>
        <div class="w-2/5 flex text-lg justify-center gap-x-4">
          <h3>Price</h3>
          <span class="text-slate-600">${data[id].price}</span>
        </div>
      </div>
    </div>
    <h2 class="text-center text-xl py-4 font-bold text-slate-600">
      Comments (2)
    </h2>
    <ul class="flex justify-center flex-col mx-auto items-center py-2">
      <li class="text-lg">
        <span>21/06/2020 </span> -
        <span class="text-slate-600 mx-2">John Doe : </span>
        <span> Lorem ipsum dolor sit amet consectetur </span>
      </li>
      <li class="text-lg">
        <span>21/06/2020 </span> -
        <span class="text-slate-600 mx-2">John Doe : </span>
        <span> Lorem ipsum dolor sit amet consectetur </span>
      </li>
    </ul>
    <h2 class="text-center py-4 text-xl font-bold text-slate-600">
      Add Comment
    </h2>
    <form class="flex justify-center flex-col mx-auto items-center form" id='comment-form'>

    <input class="px-2 w-1/2 py-2 border-gray-400 rounded-lg h-10 focus:outline-none
      focus:border-violet-600 input" placeholder="Enter your username" />
     <textarea
        class="w-1/2 h-32 px-2 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-violet-600 comment"
        placeholder="Write your comment here" type="text" 
      ></textarea>
      
      <button
        id="comment-button-${id}"
        class="comment-button text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg"
        type="submit"
      >
        Comment
      </button>
    </form>
    
  </div>
    `;
  });

  const form = document.querySelector(
    '#modal-container .modal-items form',
  );
  const formBtn = document.querySelector(
    '#modal-container .modal-items form button',
  );
  const textArea = document.querySelector(
    '#modal-container .modal-items form textarea',
  );
  const commentButtonId = Number(formBtn.id.split('-')[2]);
  const form1 = document.querySelector('.form');
  form1.addEventListener('submit', createComment);

  // close button
  const close = document.querySelector(
    '#modal-container .modal-items .img-container .close',
  );
  close.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('show');
  });
}
