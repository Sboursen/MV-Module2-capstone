import './style.css';
import HomeApplication from './modules/home/home-app';
import showCommentModal from './modules/comments/comments-app';

const homeApp = new HomeApplication();
homeApp.initialize().then(() => {
  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button',
  );
  console.log(commentButtons);
  commentButtons.forEach((btn) =>
    btn.addEventListener('click', showCommentModal),
  );
});
