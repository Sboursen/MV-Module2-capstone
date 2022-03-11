import CarsApi from '../home/cars-api';
import CommentData from './commentData';
import Api from './createComments';
import commentCounter from './comment-counter';
const carApi = new CarsApi();

const modalContainer = document.querySelector(
  '#modal-container',
);

const renderComment = (dataItem) => `<li class="text-lg">
        <span>${dataItem['creation_date']}</span> -
        <span class="text-slate-600 mx-2">${dataItem['username']} : </span>
        <span>${dataItem['comment']}</span>
      </li>`;

const displayCommentCounter = (data) => {
  const numberOfComments = commentCounter(data);
  const commentCounterElement = document.querySelector(
    '#modal .comment-counter-header',
  );

  commentCounterElement.textContent = `(${numberOfComments})`;
};

const displayComment = (data) => {
  const CommentContainer = document.querySelector(
    '#modal .comment-container',
  );
  if (data.length > 0) {
    let containerString = '';
    data.forEach((dataItem) => {
      containerString += `${renderComment(dataItem)} \n`;
    });

    CommentContainer.innerHTML = containerString;
  } else {
    CommentContainer.innerHTML = '';
  }
};

export const createComment = (event) => {
  event.preventDefault();
  const api = new Api();
  const comBtn = document.querySelector('.form button');
  const id = Number(comBtn.id.split('-')[2]);
  const usernameInput =
    document.querySelector('.form .input');
  const commentInput = document.querySelector(
    '#modal-container .modal-items form textarea',
  );

  const username = usernameInput.value;
  const comment = commentInput.value;
  const commentObj = new CommentData(username, comment, id);

  api
    .addComment(commentObj)
    .then(() => api.getComment(id))
    .then((data) => {
      displayComment(data);
      displayCommentCounter(data);
    });
};

export async function showCommentModal(e) {
  const id = Number(e.target.parentNode.parentNode.id);
  await carApi.getDataPromise().then((data) => {
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
      Comments <span class="comment-counter-header"></span>
    </h2>
    <ul class="comment-container flex justify-center flex-col mx-auto items-center py-2">
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

  const form1 = document.querySelector('.form');
  form1.addEventListener('submit', createComment);

  // load comments
  const api = new Api();

  await api
    .getComment(id)
    .then((commentData) => {
      displayComment(commentData);
      displayCommentCounter(commentData);
    })
    .catch((error) => {
      displayComment([]);
      displayCommentCounter(commentData);
    });

  // close button
  const close = document.querySelector(
    '#modal-container .modal-items .img-container .close',
  );
  close.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('show');
  });
}
