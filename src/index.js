import './style.css';
import HomeApplication from './modules/home/home-app';
import {
  showCommentModal,
} from './modules/comments/comments-app';
import showReservationModal from './modules/reservations/reservation-app';

const homeApp = new HomeApplication();

function registerHomeEvents() {
  const likesButtons = document.querySelectorAll('.heart');

  likesButtons.forEach((likeButton) => likeButton.addEventListener(
    'click',
    homeApp.toggleHeart,
  ));

  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button',
  );

  commentButtons.forEach((btn) => btn.addEventListener('click', showCommentModal));

  const reservationButtons = document.querySelectorAll(
    '.reservation-button',
  );

  reservationButtons.forEach((btn) => btn.addEventListener('click', showReservationModal));
}

homeApp.initialize().then(() => {
  registerHomeEvents();
});
