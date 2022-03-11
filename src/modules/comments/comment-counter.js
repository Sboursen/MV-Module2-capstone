const commentCounter = (commentData) => {
  if (commentData.length) {
    return commentData.length;
  }
  return 0;
};

export default commentCounter;
