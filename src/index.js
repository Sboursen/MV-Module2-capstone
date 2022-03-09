import './style.css';
import HomeApplication from './modules/home/home-app';
import showCommentModal from './modules/comments/comments-app';
import showReservationModal from './modules/reservations/reservation-app';
import { setReservedToAPI, getDataFromInvolvementAPI} from './modules/reservations/involvementAPI';

const homeApp = new HomeApplication();
homeApp.initialize().then(() => {
  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button',
  );

  commentButtons.forEach((btn) => btn.addEventListener('click', showCommentModal));

  const reservationButtons = document.querySelectorAll('.reservation-button');

  reservationButtons.forEach((btn) => btn.addEventListener('click', showReservationModal));
});

getDataFromInvolvementAPI('item1');
// setReservedToAPI('item1', 'Jerry', '2022/03/12', '2022/03/13');
