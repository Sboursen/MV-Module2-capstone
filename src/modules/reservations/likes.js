const getLikesFromApi = async () => {
  const getLikes = await fetch('url');
  const json = await getLikes.json();
  return json;
};

const addLikesToApi = async (id) => {
  const postLikes = await fetch('url', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return postLikes;
};

export { getLikesFromApi, addLikesToApi };