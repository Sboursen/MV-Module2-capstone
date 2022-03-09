import './style.css';
import HomeApplication from './modules/home/home-app';
import showCommentModal from './modules/comments/comments-app';

const homeApp = new HomeApplication();

function registerHomeEvents() {
  const likesbuttons = document.querySelectorAll('.heart');

  likesbuttons.forEach((likebutton) =>
    likebutton.addEventListener(
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
  registerHomeEvents();
});
