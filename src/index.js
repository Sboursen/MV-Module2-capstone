import './style.css';
import {
  HomeApplication,
  getAllCarsCount,
} from './modules/home/home-app';
import showCommentModal from './modules/comments/comments-app';
import showReservationModal from './modules/reservations/reservation-app';
import {
  setReservedToAPI,
  getDataFromInvolvementAPI,
} from './modules/reservations/involvementAPI';

const homeApp = new HomeApplication();

function registerHomeEvents() {
  const likesButtons = document.querySelectorAll('.heart');
  const allCarsCount = document.querySelector(
    '.cars-nav-element',
  );

  allCarsCount.textContent = getAllCarsCount();

  likesButtons.forEach((likeButton) =>
    likeButton.addEventListener(
      'click',
      homeApp.toggleHeart,
    ),
  );
}

homeApp.initialize().then(() => {
  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button',
  );

  commentButtons.forEach((btn) =>
    btn.addEventListener('click', showCommentModal),
  );

  const reservationButtons = document.querySelectorAll(
    '.reservation-button',
  );

  reservationButtons.forEach((btn) =>
    btn.addEventListener('click', showReservationModal),
  );

  registerHomeEvents();
});
