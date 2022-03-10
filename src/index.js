import './style.css';
import HomeApplication from './modules/home/home-app';
import showCommentModal from './modules/comments/comments-app';

const homeApp = new HomeApplication();
const modalContainer = document.querySelector('#modal-container');
homeApp.initialize().then(() => {
  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button'
  );

  commentButtons.forEach((btn) =>
    btn.addEventListener('click', showCommentModal)
  );
});
